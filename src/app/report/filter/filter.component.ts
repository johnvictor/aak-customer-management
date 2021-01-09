import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { map, tap } from "rxjs/operators";
import { LoaderService } from "src/app/services/loader.service";
import { UserService } from "src/app/services/user.service";
import { ReportService } from "../report.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  currentYear: any = new Date().getFullYear();
  date: any = new Date().toISOString();
  filterForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private reportService: ReportService,
    private userService: UserService,
    private loader: LoaderService
  ) {}

  ngOnInit() {
    this.initFilterForm();
  }

  initFilterForm() {
    this.filterForm = this.formBuilder.group({
      name: "",
      location: "",
      month: "",
      year: "",
    });
    if (this.reportService.filterFormValues) {
      this.filterForm.setValue(this.reportService.filterFormValues);
    }
  }

  dismissModal() {
    this.closeModal();
  }

  filter() {
    this.reportService.filterFormValues = this.filterForm.getRawValue();
    this.userService
      .getUsersWithFilter(this.reportService.filterFormValues)
      .pipe(tap(() => this.loader.hideLoader()))
      .subscribe((res) => this.closeModal(res));
  }

  clearField(formControlName: string) {
    this.filterForm.get(formControlName).setValue("");
  }

  closeModal(users?) {
    this.modalCtrl.dismiss({
      users,
    });
  }
}
