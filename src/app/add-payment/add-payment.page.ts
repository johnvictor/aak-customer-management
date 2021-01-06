import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/users.model';
import { LoaderService } from '../services/loader.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.page.html',
  styleUrls: ['./add-payment.page.scss'],
})
export class AddPaymentPage implements OnInit {
  userId: string;
  user: User;
  paymentForm: FormGroup;
  payments = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private loader: LoaderService
  ) {
    this.userId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.loader.showLoader();
    this.userService.getUserById(this.userId).then(res => {
      this.loader.hideLoader();
      this.user = res.data();
      this.user.slNo = res.id;
    });
    this.initPaymentForm();
  }
  initPaymentForm() {
    this.paymentForm = this.formBuilder.group({
      paymentDate: ['', Validators.required],
      receivedBy: ['', Validators.required]
    });
  }

  pay() {
    this.paymentForm.markAllAsTouched();

    if (this.paymentForm.valid) {
      this.loader.showLoader();
      this.userService.addPaymentToUser(this.userId, this.paymentForm.value).then(res => {
        this.loader.hideLoader();
        this.router.navigate(['home']);
      }, () => this.loader.hideLoader());
    }
  }

}
