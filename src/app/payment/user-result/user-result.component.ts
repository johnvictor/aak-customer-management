import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss'],
})
export class UserResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  gotoPay() {
    this.router.navigate(['add-payment']);
  }

}
