import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MoreProductComponent } from './more-product/more-product.component';


@NgModule({
  declarations: [
    MoreProductComponent
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
