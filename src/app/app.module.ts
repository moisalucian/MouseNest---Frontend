import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './maincomponent/app.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AddProductComponent } from './components/add-product/add-product.component'
import { ReactiveFormsModule } from '@angular/forms';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    OrdersComponent,
    ProductsDetailsComponent,
    AddProductComponent,
    AddOrderComponent,
    OrdersDetailsComponent,
    UpdateProductComponent,
    UpdateOrderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
