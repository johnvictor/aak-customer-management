import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.page.html',
  styleUrls: ['./add-payment.page.scss'],
})
export class AddPaymentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pay() {
    this.router.navigate(['home']);
  }

}
