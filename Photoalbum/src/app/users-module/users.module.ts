import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModule } from '../shared-module/shared.module';
import { UsersService } from '../shared-module/services/users.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared-module/services/auth.interceptor';
import { ChangeUserComponent } from './change-user/change-user.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true 
      }
    ],
  declarations: [SignUpComponent, SignInComponent, ChangeUserComponent],
  exports:[SignUpComponent, SignInComponent]
})
export class UsersModule { }
