import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { ApiService } from '../../shared/api/api.service';
import { environment } from '../../../environments/environment';
import { AuthGuard } from '../../shared/guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService{

  private URL = {
    login: 'Token/login',
    loginAsGuest: 'Token/loginAsGuest',
    registor: '/api/v1/users/register',
    RegisterUser: 'Registration/RegisterUser',
    ValidateRegistrationOTP: 'Registration/ValidateRegistrationOTP',
    UpdateRegisterationProfile: 'Registration/UpdateRegisterationProfile',
    ResendRegistrationOTP: 'Registration/ResendRegistrationOTP',
    Forgotpassword: 'Token/forgotpassword',
    ResetForgotPassword: 'Token/ResetForgotPassword',
    ValidateForgotPasswordOTP : "Token/ValidateForgotPasswordOTP",
    LoginWithGoogle: "Token/loginWithGoogle",
    Refreshtoken: "Token/refreshtoken",
  }

  Login(obj: any) {
    return this.http.post(environment.baseURL + this.URL.login, obj).pipe(this.handleRequest().bind(this));
  }
  LoginAsGuest(obj: any) {
    return this.http.post(environment.baseURL + this.URL.loginAsGuest, obj).pipe(this.handleRequest().bind(this));
  }

  Registor(obj: User): Observable<any> {
    return this.http.post(this.URL.registor, obj).pipe(this.handleRequest().bind(this));
  }
  RegisterUser(obj: any) {
    return this.http.post(environment.baseURL + this.URL.RegisterUser, obj).pipe(this.handleRequest().bind(this));
  }

  ValidateRegistrationOTP(obj: any) {
    return this.http.post(environment.baseURL + this.URL.ValidateRegistrationOTP, obj).pipe(this.handleRequest().bind(this));
  }

  ValidateForgotPasswordOTP(obj: any) {
    return this.http.post(environment.baseURL + this.URL.ValidateForgotPasswordOTP, obj).pipe(this.handleRequest().bind(this));
  }

  UpdateRegisterationProfile(obj: any) {
    return this.http.post(environment.baseURL + this.URL.UpdateRegisterationProfile, obj).pipe(this.handleRequest().bind(this));
  }
  ResendRegistrationOTP(obj: any) {
    return this.http.post(environment.baseURL + this.URL.ResendRegistrationOTP, obj).pipe(this.handleRequest().bind(this));
  }

  Forgotpassword(obj: any) {
    return this.http.post(environment.baseURL + this.URL.Forgotpassword, obj).pipe(this.handleRequest().bind(this));
  }

  ResetForgotPassword(obj: any) {
    return this.http.post(environment.baseURL + this.URL.ResetForgotPassword, obj).pipe(this.handleRequest().bind(this));
  }

  LoginWithGoogle(obj: any) {
    return this.http.post(environment.baseURL + this.URL.LoginWithGoogle, obj).pipe(this.handleRequest().bind(this));
  }

  RefreshToken(obj: any) {
    var headers_object = new HttpHeaders ({
      'Content-Type': 'application/json',
      'auth': 'true',
      'Authorization': "Bearer "+AuthGuard.getToken()
    });
    const httpOptions = {
      headers: headers_object
    };
    return this.http.post(environment.baseURL + this.URL.Refreshtoken, obj,httpOptions).pipe(this.handleRequest().bind(this));
  }

}