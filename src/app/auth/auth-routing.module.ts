import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResetCredentialComponent } from './components/reset-password/reset-credential/reset-credential.component';
import { UpdatePasswordComponent } from './components/reset-password/update-password/update-password.component';
import { OtpComponent } from './components/register/otp/otp.component';
import { RegisterComponent } from './components/register/register.component';
import { MobileNumberComponent } from './components/register/mobile-number/mobile-number.component';
import { RegisterUserGuard } from './guards/register.user.gard';
import { UserDetailsComponent } from './components/register/user-details/user-details.component';
import { TermsComponent } from './components/register/terms/terms.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'reset-password',
        component: ResetCredentialComponent,
      },
      {
        path:'create-password',
        component: UpdatePasswordComponent,
      },
      {
        path: 'reset-password-otp',
        component: OtpComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
        children: [
          {
            path: 'mobile-number',
            component: MobileNumberComponent,
          },
          {
            path: 'otp',
            component: OtpComponent,
            canActivate: [RegisterUserGuard]
          },
          {
            path: 'name',
            component: UserDetailsComponent,
            canActivate: [RegisterUserGuard]
          },
          {
            path: 'terms',
            component: TermsComponent,
            canActivate: [RegisterUserGuard]
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
