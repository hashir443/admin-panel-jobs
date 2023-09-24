import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MobileNumberComponent } from './components/register/mobile-number/mobile-number.component';
import { OtpComponent } from './components/register/otp/otp.component';
import { TermsComponent } from './components/register/terms/terms.component';
import { UserDetailsComponent } from './components/register/user-details/user-details.component';
import { ResetCredentialComponent } from './components/reset-password/reset-credential/reset-credential.component';
import { UpdatePasswordComponent } from './components/reset-password/update-password/update-password.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    MobileNumberComponent,
    OtpComponent,
    TermsComponent,
    UserDetailsComponent,
    ResetCredentialComponent,
    UpdatePasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
