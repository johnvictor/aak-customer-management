import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPaymentPageRoutingModule } from './add-payment-routing.module';

import { AddPaymentPage } from './add-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddPaymentPageRoutingModule
  ],
  declarations: [AddPaymentPage]
})
export class AddPaymentPageModule {}
