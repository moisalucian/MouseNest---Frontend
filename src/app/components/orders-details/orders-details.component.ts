import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {

  order!: Order;
  id!: number;

  constructor(private orderService:OrderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getOrderDetails(this.id);
  }

  getOrderDetails(id:any){
    this.id = this.route.snapshot.params['orderId'];
    console.log(this.id);
    this.orderService.getOrderById(this.id).subscribe(
      (data:Order) => {this.order = data},
      err => console.error(err),
      () => console.log("Orders loaded" + JSON.stringify(this.order))
    );
  }  

}
