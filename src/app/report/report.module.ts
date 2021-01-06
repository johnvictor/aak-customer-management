import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';
import { FilterComponent } from './filter/filter.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule
  ],
  declarations: [ReportPage, FilterComponent, PaymentHistoryComponent]
})
export class ReportPageModule {}
