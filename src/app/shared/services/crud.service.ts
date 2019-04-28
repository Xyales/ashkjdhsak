import { Injectable } from '@angular/core';
import { User } from '../user';  // User data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  usersRef: AngularFireList<any>;    // Reference to User data list, its an Observable
  userRef: AngularFireObject<any>;   // Reference to User object, its an Observable too
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create User
  AddUser(user: User) {
    this.usersRef.push({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber
    })
  }

  // Fetch Single User Object
  GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // Fetch Users List
  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }  

  // Update User Object
  UpdateUser(user: User) {
    this.userRef.update({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      mobileNumber: user.mobileNumber
    })
  }  

  // Delete User Object
  DeleteUser(id: string) { 
    this.userRef = this.db.object('users-list/'+id);
    this.userRef.remove();
  }
  
}