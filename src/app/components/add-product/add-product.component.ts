import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productForm!:FormGroup;
  message:string="";

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      brand: new FormControl('',[Validators.required]),
      weight: new FormControl('',[Validators.required]),
      size: new FormControl('',[Validators.required]),
      dimensions: new FormControl('',[Validators.required]),
      connectivity: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      url: new FormControl('',[Validators.required])
    })
  }


  addProduct() {
    if(this.productForm.valid) {
      this.message="Your product have been submitted!";

    console.log('Product form:' + JSON.stringify(this.productForm.value))
    this.productService.createProduct(this.productForm.value).subscribe(
      data => {
        this.productForm.reset();
        console.log("Product created successfully!");
      },
      err => console.log(err)
      )
  } else {
    this.message="Please fill out all the product form before submitting!"
  }
}

}
