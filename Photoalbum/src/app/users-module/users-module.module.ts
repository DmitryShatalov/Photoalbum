import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { UsersService } from '../shared-module/services/users.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, SharedModuleModule
  ],
  declarations: [SignUpComponent, SignInComponent],
  exports:[SignUpComponent, SignInComponent]
})
export class UsersModuleModule { }
