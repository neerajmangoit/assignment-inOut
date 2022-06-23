import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  @Output() newItemEvent = new EventEmitter<number>();
  @Input() total:number;

  addNewItem(newItem:number) {
    this.newItemEvent.emit(newItem);
  }
  
  ngOnInit(): void {
  }
  
}
