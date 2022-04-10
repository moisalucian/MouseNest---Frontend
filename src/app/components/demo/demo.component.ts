import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

isUnchanged = true;

students = [
  {name:"Maria",job:"Programator",age:"23",hobby:"Hiking"},
  {name:"Patrick",job:"Programator",age:"21",hobby:"Movies"},
  {name:"Adrian",job:"Programator",age:"26",hobby:"Gaming"},
  {name:"Darie",job:"Programator",age:"43",hobby:"Sport"},
  {name:"Marius",job:"Programator",age:"23",hobby:"Car Racing"}
]

  constructor() { }

  ngOnInit(): void {
  }

}
