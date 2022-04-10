import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  orderForm!:FormGroup;
  message:string="";

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderForm = new FormGroup({
      numberTracking: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      orderDate: new FormControl('',[Validators.required]),
    })
  }

  addOrder() {
    if(this.orderForm.valid) {
      this.message="Your order have been submitted";

    console.log('Order form:' + JSON.stringify(this.orderForm.value))
    this.orderService.createOrder(this.orderForm.value).subscribe(
      data => {
        this.orderForm.reset();
        console.log("Order created successfully!");
      },
      err => console.log(err)
      )
  } else {
    this.message="Please fill out all the order form before submitting!"
  }
}

}
