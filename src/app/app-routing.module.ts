import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { HomeComponent } from './component/home/home.component';
import { BallsComponent } from './pages/balls/balls.component';
const routes: Routes = [

  { path: "home", redirectTo: "home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {path:"home", component:HomeComponent},
  {path:"ball", component:BallsComponent},



  { path: "products", component: ProductComponent },
  { path: "cart", component: CartComponent },
  {path:"footer", component:FooterComponent},
  {path:"**", component:HomeComponent}

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
