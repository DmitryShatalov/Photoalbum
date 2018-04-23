import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllphotosComponent } from '../all-photos-module/allphotos/allphotos.component';
import { MyphotosComponent } from '../my-photos-module/myphotos/myphotos.component';
import { SignInComponent } from '../users-module/sign-in/sign-in.component';
import { SignUpComponent } from '../users-module/sign-up/sign-up.component';


const appRoutes: Routes =[
  { path: '', component: AllphotosComponent},
  { path: 'login', component: SignInComponent},
  { path: 'register', component: SignUpComponent},
  { path: 'myphotos', component: MyphotosComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { 
  
}
