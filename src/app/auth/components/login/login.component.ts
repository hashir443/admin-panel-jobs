import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { AppToastrService } from "../../../shared/app-toastr.service";
import { SpinnerService } from "../../../shared/spinner/spinner.service";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { justBlankSpaceValidator } from "../../../shared/helpers/blankspace.validator";
import { validate } from "../../../shared/helpers/form.helper";
import { AuthGuard } from "../../../shared/guards/auth.guard";
import { AppHttpService } from "../../../shared/api/http-api-service";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private readonly subscriptions = new Subscription();

  imageConfig = {
    //mainImage: "assets/images/img-bg.png",
    mainImage: "assets/landingPageVideo/LandingPageVide.mp4",
    subImage: "assets/images/ProceedButton.png",
    pawImage:"assets/images/logoPaw.png",
    titleImage:"assets/images/Pets Pakistan.png",
    isVideo: true
  }
  userForm: FormGroup;

  user:User = new User;

  passwordVisible = false;
  passwordFieldType = 'password';
  loggedIn: boolean = false;
  errorMessage = '';
  userInfo: any;
  rememberMeStr = 'rememberMe';
  token: string|undefined;
  numberOfAttempts = 0;
  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    public spinnerService: SpinnerService,
    private router: Router,
    private httpService: AppHttpService
    ) {
    this.userForm = this.initForm();

  }

  ngOnInit(): void {}

  initForm(): FormGroup {
    return  this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.maxLength(12),justBlankSpaceValidator()]],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.invalid) {
      validate(form);
      return;
    }
    this.loginUser();
  }

  loginUser() {
    
    const obj = {
      username: this.userForm.value.username,
      password: this.userForm.value.password
    }
    this.errorMessage = '';
    this.spinnerService.requestInProcess(true);
    const sub = this._authService.Login(obj)
    .subscribe(
      {
        next: (v: any) => {

          this.updateTokens(v.data.data)
          this.redirectToFeed()
        },
        error: (e) => {
          this.errorMessage = e.message || "Something went wrong please try again later";

        },
        complete: () => {
          this.spinnerService.requestInProcess(false);
        }
      }
    )
    this.subscriptions.add(sub);

  }

  get f() {
    return this.userForm.controls;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  rememberMe() {
    const {rememberMe} = this.userForm.value;
    localStorage.setItem(this.rememberMeStr, rememberMe);
  }
  // checkAutoLogin() {

  //   const rememberMe = localStorage.getItem(this.rememberMeStr);

  //   if(rememberMe && AuthGuard.getRefreshToken()) {

  //     this.reFreshToekn();
  //     return;
  //   }
  //   this.socialAuthService.signOut();
  // }

  updateTokens(data: any) {
    this.user.token = data.accessToken;
    this.user.refreshToken = data.refreshToken;
    this.rememberMe();
    AuthGuard.login(this.user);
  }

  redirectToFeed(){
    this.router.navigate(['/pages']);
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
    this.passwordFieldType = this.passwordVisible ? 'text' : 'password';
  }

  ngOnDestroy(): void {
    localStorage.removeItem('numberOfAttempts');
    this.subscriptions.unsubscribe()
  }
}