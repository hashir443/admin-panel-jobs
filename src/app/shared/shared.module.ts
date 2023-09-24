import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TranslationComponent } from './translation/translation.component';

import { GuestComfirmationModalComponent } from './guards/guest-comfirmation-modal/guest-comfirmation-modal.component';
import { NotLoggedinModalComponent } from './guards/not-loggedin-modal/not-loggedin-modal.component';

import { NgbActiveModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NbLayoutModule } from '@nebular/theme';
@NgModule({
  declarations: [
    // TranslationComponent,
    GuestComfirmationModalComponent,
    NotLoggedinModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbNavModule,
    NbLayoutModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    // TranslationComponent,
    GuestComfirmationModalComponent,
    NotLoggedinModalComponent,
    NbLayoutModule
  ],
  providers: [
    NgbActiveModal
  ]
})
export class SharedModule { }
