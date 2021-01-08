import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  currentYear: any = (new Date()).getFullYear();
  date: any = new Date().toISOString();
  filterForm: FormGroup;

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder, private reportService: ReportService) { }

  ngOnInit() {
    this.initFilterForm();
  }

  initFilterForm() {
    this.filterForm = this.formBuilder.group({
      name: '',
      location: '',
      month: '',
      year: ''
    });
    if(this.reportService.filterFormValues) {
      this.filterForm.setValue(this.reportService.filterFormValues);
    }
  }

  dismissModal() {
    this.closeModal();
  }

  filter() {
    this.reportService.filterFormValues = this.filterForm.getRawValue();
    this.closeModal();
  }

  clearField(formControlName: string) {
    this.filterForm.get(formControlName).setValue('');
  }

  closeModal() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
