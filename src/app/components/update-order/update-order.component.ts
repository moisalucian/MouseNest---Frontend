import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss']
})
export class UpdateOrderComponent implements OnInit {

  orderForm!:FormGroup;
  order!:Order;
  id!:number;
  message:string="";

  constructor(private orderService:OrderService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['orderId'];
    this.orderService.getOrderById(this.id).subscribe((data:Order) => {
    this.order = data;
    })
    this.orderForm = new FormGroup({
      numberTracking: new FormControl('',[Validators.required]),
      address: new FormControl('',[Validators.required]),
      orderDate: new FormControl('',[Validators.required]),
    })
  }

  updateOrder(){
    if(this.orderForm.valid) {
    this.message="Your order have been updated!";

    console.log('Order form:' + JSON.stringify(this.orderForm.value))
    this.orderService.updateOrder(this.id, this.orderForm.value).subscribe(
      data => {
        console.log("Order edited successfully!");
      },
      err => console.log(err)
      )
    }
  
}
  


}
