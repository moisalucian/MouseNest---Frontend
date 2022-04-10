import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productForm!:FormGroup;
  product!:Product;
  id!:number;
  message:string="";

  constructor(private productService:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    // this.productService.getProductById(this.id).subscribe((data:Product) => {
    // this.product = data;
    // })

    this.productService.getProductById(this.id).subscribe((data:Product) => {
      this.product = data;
      
      this.productForm = new FormGroup({
        name: new FormControl(this.product.name,[Validators.required]),
        brand: new FormControl(this.product.brand,[Validators.required]),
        weight: new FormControl(this.product.weight,[Validators.required]),
        size: new FormControl(this.product.size,[Validators.required]),
        dimensions: new FormControl(this.product.dimensions,[Validators.required]),
        connectivity: new FormControl(this.product.connectivity,[Validators.required]),
        description: new FormControl(this.product.description,[Validators.required]),
        price: new FormControl(this.product.price,[Validators.required]),
        url: new FormControl(this.product.url,[Validators.required])
      })
    },
      err => console.error(err),
            
    );
    
    // this.product=this.productService.getProductById(this.id);
    
  }

  updateProduct(){
    if(this.productForm.valid) {
    this.message="Your product have been updated!";

    console.log('Product form:' + JSON.stringify(this.productForm.value))
    this.productService.updateProduct(this.id, this.productForm.value).subscribe(
      data => {
        console.log("Product edited successfully!");
      },
      err => console.log(err)
      )
    }
  
}
  


}
