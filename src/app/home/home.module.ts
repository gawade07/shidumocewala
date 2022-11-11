import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { CommonComponent } from './home/common/common.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CommonComponent,
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],exports:[
    HomeComponent,
  ]
})
export class HomeModule { }
