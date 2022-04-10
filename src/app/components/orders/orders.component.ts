import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];
  id!:number;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrdersFromDB();
  }

  getOrdersFromDB(){
    this.orderService.getAllOrders().subscribe(
      (data:any) => {this.orders = data},
      err => console.error(err),
      () => console.log("Orders loaded" + JSON.stringify(this.orders))
    );
  }

  deleteOrderFromDB(id:any){
    this.orderService.deleteOrderById(id).subscribe(
      data => {console.log("Order deleted with id:" + id);
      window.location.reload();
    },
    err => console.error(err),
    )
  }

  clickMethod(id: any) {
    if(confirm("Are you sure you want to delete the product with ID: "+ id + "?")){
    this.deleteOrderFromDB(id);
    }
  }

}
