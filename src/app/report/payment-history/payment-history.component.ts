import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.scss'],
})
export class PaymentHistoryComponent implements OnInit {
  payments = [];
  @Input() userId: string;
  @Input() customerName: string;
  constructor(
    public modalController: ModalController,
    private userService: UserService,
    private loader: LoaderService) { }

  ngOnInit() {
    this.loader.showLoader();
    this.loadPayments();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  loadPayments() {
    this.userService.getPayments(this.userId).forEach((querySnapshot) => {
      this.loader.hideLoader();
      this.payments = querySnapshot;
    });
  }

}
