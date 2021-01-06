import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestoreModule,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  users: Observable<User[]>;
  customersCollection: AngularFirestoreCollection<User>;
  selectedUserForPay: User;

  constructor(public afs: AngularFirestore) {
    this.customersCollection = this.afs.collection('customers');

    this.users = this.customersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.slNo = a.payload.doc.id;
        return data;
      });
    }));
  }

  addUser(payload: User) {
    return this.customersCollection.add(payload);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.customersCollection.doc(id).ref.get();
  }

  addPaymentToUser(docId, payload) {
    return this.customersCollection.doc(docId).collection('payments').add(payload);
  }

  getPayments(userId) {
    return this.afs.collection('customers').doc(userId).collection('payments').valueChanges();
  }
}
