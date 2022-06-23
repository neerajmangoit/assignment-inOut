import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {
  
  @Output() newItemEvent = new EventEmitter<number>();

  quantity:number;
  amount:number;

  constructor() { this.newItemEvent.emit(this.quantity); }
  
  increase() {
    this.quantity++;
    this.total();
  }
  decrease() {
    this.quantity--;
    this.total();
  }

  addItem(newItem: number) {
    this.quantity = newItem;
    this.total();
  }
  
  total() {
    this.amount = this.quantity * 5;
  }

  ngOnInit(): void {
  }

}
