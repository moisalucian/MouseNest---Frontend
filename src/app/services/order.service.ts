import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../interfaces/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  httpHeaders ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor(private httpClient:HttpClient) { }

  getAllOrders():Observable<Order[]> {
    return this.httpClient.get<Order[]>("/server/orders/allOrders")
  }

  getOrderById(id:any):Observable<Order>{
    return this.httpClient.get<Order>("/server/orders/order/" + id);
  }
  
  createOrder(order:Order):Observable<Order>{
    return this.httpClient.post<Order>("/server/orders/createOrder", JSON.stringify(order),this.httpHeaders)
  }

  updateOrder(id:any,order:Order):Observable<Order>{
    return this.httpClient.put<Order>("/server/orders/updateOrder/" + id, JSON.stringify(order),this.httpHeaders)
  }
  
  deleteOrderById(id:any):Observable<Order>{
    return this.httpClient.delete<Order>("/server/orders/deleteOrder/" + id, this.httpHeaders);
  }
}
