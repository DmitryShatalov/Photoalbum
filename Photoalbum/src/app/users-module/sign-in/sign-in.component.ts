import { AuthService } from './../../shared-module/services/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared-module/services/users.service';
import { User } from '../../shared-module/models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login;
  password;
  loginForm: FormGroup;
  message = "";
  constructor(private usersService: UsersService, private authService: AuthService, private router: Router) { }

 
  ngOnInit() {
   
    this.loginForm = new FormGroup({
      'login': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  loginUser(){
    const formData = this.loginForm.value;
    //console.log(formData);
    this.usersService.loginUser(formData).subscribe((res) => {
      if(res){
        console.log(res['token']);
        window.localStorage.setItem("token", JSON.stringify((res['token'])));
        this.authService.login();
        this.router.navigate(['myphotos']);
        this.usersService.getCurrentUser().subscribe(data => console.log(data));
      } else {
         alert('Неверный логин или пароль')
      }
    });
  }
}
