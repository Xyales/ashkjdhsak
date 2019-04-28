import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';  // CRUD API service class
import { User } from '../../shared/user';   // user interface class for Data types.
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UsersListComponent implements OnInit {
  p: number = 1;                      // Settup up pagination variable
  User: User[];                 // Save Users data in User's array.
  hideWhenNoUser: boolean = false; // Hide Users data table when no user.
  noData: boolean = false;            // Showing No User Message, when no user in database.
  preLoader: boolean = true;          // Showing Preloader to show user data is coming for you from thre server(A tiny UX Shit)
  

  constructor(
    public crudApi: CrudService, // Inject User CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
    ){ }


  ngOnInit() {
    this.dataState(); // Initialize User's list, when component is ready
    let s = this.crudApi.GetUsersList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.User = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.User.push(a as User);
      })
    })
  }

  // Using valueChanges() method to fetch simple list of users data. It updates the state of hideWhenNouser, noData & preLoader variables when any changes occurs in user data list in real-time.
  dataState() {     
    this.crudApi.GetUsersList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoUser = false;
        this.noData = true;
      } else {
        this.hideWhenNoUser = true;
        this.noData = false;
      }
    })
  }

  // Method to delete user object
  deleteUser(user) {
    if (window.confirm('Are you sure, you want to delete this user ?')) { // Asking from user before Deleting User data.
      this.crudApi.DeleteUser(user.$key) // Using Delete User API to delete User.
      this.toastr.success(user.firstName + ' successfully deleted!'); // Alert message will show up when User successfully deleted.
    }
  }

}