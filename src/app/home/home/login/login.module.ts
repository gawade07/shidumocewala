import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MoreProductComponent } from './more-product/more-product.component';
import { NextProductComponent } from './next-product/next-product.component';


@NgModule({
  declarations: [
    MoreProductComponent,
    NextProductComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports:[
    MoreProductComponent
  ]
})
export class LoginModule { }
