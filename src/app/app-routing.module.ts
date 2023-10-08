import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './auth.guard';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'about',canActivate:[authGuard], component:AboutComponent},
  {path: 'home',canActivate:[authGuard], component:HomeComponent},
  {path: 'brands',canActivate:[authGuard],component:BrandsComponent},
  {path: 'products',canActivate:[authGuard],component:ProductsComponent},
  {path: 'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path: 'productdetails/:id',canActivate:[authGuard],component:ProductdetailsComponent},
  {path: 'cart',canActivate:[authGuard],component:CartComponent},
  {path: 'checkout',canActivate:[authGuard],component:CheckoutComponent},
  {path:'settings', loadChildren:()=> import('./settings/settings.module').then((m)=>m.SettingsModule)},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
