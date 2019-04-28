import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../shared/services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {
  public userForm: FormGroup;  // Define FormGroup to user's form
 
  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService  // Toastr service for alert message
  ) { }

 
  ngOnInit() {
    this.crudApi.GetUsersList();  // Call GetUsersList() before main form is being called
    this.usrForm();              // Call user form when component is ready
  }

  // Reactive user form
  usrForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })  
  }

  // Accessing form control using getters
  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }  

  get email() {
    return this.userForm.get('email');
  }

  get mobileNumber() {
    return this.userForm.get('mobileNumber');
  }

  // Reset user form's values
  ResetForm() {
    this.userForm.reset();
  }  
 
  submitUserData() {
    this.crudApi.AddUser(this.userForm.value); // Submit user data using CRUD API
    this.toastr.success(this.userForm.controls['firstName'].value + ' successfully added!'); // Show success message when data is successfully submited
    this.ResetForm();  // Reset form when clicked on reset button
   };

}