import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { PaymentSearchComponent } from './payment-search/payment-search.component';
import { UserResultComponent } from './user-result/user-result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule
  ],
  declarations: [
    PaymentPage,
    PaymentSearchComponent,
    UserResultComponent
  ]
})
export class PaymentPageModule {}
