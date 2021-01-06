import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/users.model';
import { LoaderService } from 'src/app/services/loader.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss'],
})
export class UserResultComponent implements OnInit {
  users: User[];
  constructor(private router: Router, private userService: UserService, private loader: LoaderService) { }

  ngOnInit() {
    this.loader.showLoader();
    this.userService.getUsers().pipe(tap(() => this.loader.hideLoader())).subscribe(res => this.users = res);
  }

  gotoPay(id: string) {
    this.router.navigate(['add-payment', id]);
  }

}
