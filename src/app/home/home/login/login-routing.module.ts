import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreProductComponent } from './more-product/more-product.component';

const routes: Routes = [
  {path:"more",component:MoreProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
