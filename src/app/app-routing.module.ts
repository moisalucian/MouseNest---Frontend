import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersDetailsComponent } from './components/orders-details/orders-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductsComponent
  },
  {
    path:"product/createProduct",
    component: AddProductComponent
  },
  {
    path:"product/:productId",
    component: ProductsDetailsComponent
  },
  {
    path:"product/updateProduct/:productId",
    component: UpdateProductComponent
  },
  {
    path:"orders",
    component: OrdersComponent
  },
  {
    path:"order/createOrder",
    component: AddOrderComponent
  },
  {
    path:"order/:orderId",
    component: OrdersDetailsComponent
  },
  {
    path:"order/updateOrder/:orderId",
    component: UpdateOrderComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
