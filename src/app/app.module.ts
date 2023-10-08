import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SliderComponent } from './slider/slider.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { BuyPipe } from './buy.pipe';
import { SeemorePipe } from './seemore.pipe';
import { TestPipe } from './test.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddheaderInterceptor } from './addheader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    SliderComponent,
    RegisterComponent,
    CartComponent,
    BrandsComponent,
    NotfoundComponent,
    CategoriesComponent,
    AboutComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    BuyPipe,
    SeemorePipe,
    TestPipe,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    
    
    ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AddheaderInterceptor,
    multi:true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
