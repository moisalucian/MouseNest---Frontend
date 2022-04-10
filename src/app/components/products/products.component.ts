import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  id!:number;
  name!:String;
  brand!:string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsFromDB();
  }

  getProductsFromDB(){
    this.productService.getAllProducts().subscribe(
      (data:any) => {this.products = data},
      err => console.error(err),
      () => console.log("Products loaded" + JSON.stringify(this.products))
    );
  }

  deleteProductFromDB(id:any){
    this.productService.deleteProductById(id).subscribe(
      data => { 
        // alert("Are you sure you want to delete this product with id:" + id + "?");
        console.log("Product deleted with id:" + id);
      window.location.reload();
    },
    err => console.error(err),
    )
  }

  clickMethod(name: any, id: any) {
    if(confirm("Are you sure you want to delete the product with name "+ name)){
    this.deleteProductFromDB(id)
    }
  }

}
