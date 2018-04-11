import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllphotosComponent } from '../all-photos-module/allphotos/allphotos.component';
import { MyphotosComponent } from '../my-photos-module/myphotos/myphotos.component';


const appRoutes: Routes =[
  { path: '', component: AllphotosComponent},
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
