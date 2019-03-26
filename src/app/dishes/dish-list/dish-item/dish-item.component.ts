import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dish } from '../../dish.model';


@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit {
  @Input() dish: Dish;
  @Output() selectedDish = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selectedDish.emit(this.dish);
  }
}
