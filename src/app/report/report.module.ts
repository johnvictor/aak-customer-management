import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';

import { ReportPage } from './report.page';
import { FilterComponent } from './filter/filter.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { ReportService } from './report.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportPageRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ReportService],
  declarations: [ReportPage, FilterComponent, PaymentHistoryComponent]
})
export class ReportPageModule {}
