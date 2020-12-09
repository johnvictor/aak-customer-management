import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { UserService } from '../services/user.service';
import * as AddUserModel from './add-user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {

  addUserForm: FormGroup;
  addUserModel = AddUserModel.FormControlNameMapping;
  addUserFormConfig = AddUserModel.addUserFormConfig;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      dateOfEntry: ['', Validators.required],
      fatherName: ['', Validators.required],
      contactNo: ['', Validators.required],
      alternateNo: [''],
      address: ['', Validators.required],
      landmark: ['', Validators.required]
    });
  }

  asIsOrder(a, b) {
    return 1;
  }

  submit() {
    this.addUserForm.markAllAsTouched();
    if (this.addUserForm.valid) {
      this.userService.addUser({...this.addUserForm.value, isActive: true}).then(res => {
        this.presentAlert(res.id);
      });
    }
  }

  async presentAlert(id: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      subHeader: 'ID: ' + id,
      message: 'User added successfully',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['']);
        }
      }]
    });

    await alert.present();
  }
}
