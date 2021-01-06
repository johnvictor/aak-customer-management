import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { tap } from 'rxjs/operators';
import { User } from '../models/users.model';
import { LoaderService } from '../services/loader.service';
import { UserService } from '../services/user.service';
import { FilterComponent } from './filter/filter.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  payments = [];
  users: User[];
  
  constructor(
    public modalController: ModalController,
    private userService: UserService,
    private loader: LoaderService) { }

  ngOnInit() {
    this.loader.showLoader();
    this.loadUsers();
  }

  openPaymentModal(userId) {
    this.paymentHistoryModel(userId);
  }

  loadUsers() {
    this.userService.getUsers().pipe(tap(() => this.loader.hideLoader())).subscribe(res => this.users = res);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterComponent
    });
    return await modal.present();
  }

  async paymentHistoryModel(userId) {
    const modal = await this.modalController.create({
      component: PaymentHistoryComponent,
      componentProps: {
        userId
      }
    });
    return await modal.present();
  }

}
