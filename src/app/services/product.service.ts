import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpHeaders ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  } 

  constructor(private httpClient:HttpClient) { }

getAllProducts():Observable<Product[]> {
    return this.httpClient.get<Product[]>("/server/products/allProducts");
}

getProductById(id:any):Observable<Product>{
  console.log("Id-ul produsului" + id);
  return this.httpClient.get<Product>("/server/products/product/" + id);
}

createProduct(product:Product):Observable<Product>{
  return this.httpClient.post<Product>("/server/products/createProduct", JSON.stringify(product),this.httpHeaders)
}

updateProduct(id:any,product:Product):Observable<Product>{
  return this.httpClient.put<Product>("/server/products/updateProduct/" + id, JSON.stringify(product),this.httpHeaders)
}

deleteProductById(id:any):Observable<Product>{
  return this.httpClient.delete<Product>("/server/products/deleteProduct/" + id, this.httpHeaders);
}

}
