import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {

  product!: Product;
  id!: number;

  constructor(private productService:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductDetails(this.id);
  }

  getProductDetails(id:any){
    this.id = this.route.snapshot.params['productId'];
    console.log(this.id);
    this.productService.getProductById(this.id).subscribe(
      (data:Product) => {this.product = data},
      err => console.error(err),
      () => console.log("Products loaded" + JSON.stringify(this.product))
    );
  }  

}
