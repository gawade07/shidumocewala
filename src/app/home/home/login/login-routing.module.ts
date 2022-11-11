import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreProductComponent } from './more-product/more-product.component';
import { NextProductComponent } from './next-product/next-product.component';

const routes: Routes = [
  {path:"more",component:MoreProductComponent},
  {path:"next",component:NextProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
