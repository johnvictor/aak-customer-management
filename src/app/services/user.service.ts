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
  itemsCollection: AngularFirestoreCollection<User>;
  selectedUserForPay: User;

  constructor(public afs: AngularFirestore) {
    this.itemsCollection = this.afs.collection('customers');

    this.users = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.slNo = a.payload.doc.id;
        return data;
      });
    }));
  }

  addUser(payload: User) {
    console.log(payload);
    return this.itemsCollection.add(payload);
  }

  getUsers() {
    return this.users;
  }

  getUserById(id: string) {
    return this.itemsCollection.doc(id).ref.get();
  }
}
