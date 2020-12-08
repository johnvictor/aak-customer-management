import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      slNo: ['', Validators.required],
      dateOfEntry: ['', Validators.required],
      customerName: ['', Validators.required],
      fatherName: ['', Validators.required],
      contactNo: ['', Validators.required],
      alternateNo: ['', Validators.required],
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
      
    }
  }
}
