import { Router } from '@angular/router';
import { User } from '../../shared-module/models/user.model';
import { UsersDataService } from '../../shared-module/services/users-data.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  error;
  constructor(private usersService: UsersDataService, private router: Router) {}
  
  
  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl(
        null,
        [Validators.required] 
      ),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      name: new FormControl(null, [Validators.required])
    });
  }

  registerUser() {
    const { name, login, password } = this.registerForm.value;
    const user = new User(login, name, password);
    console.log(this.registerForm);
    this.usersService.registerUser(user).subscribe((user: User) => {
      console.log(user);
      this.router.navigate(["login"]);
    }, error => {
      this.error = error.error;
    });
  }
}
