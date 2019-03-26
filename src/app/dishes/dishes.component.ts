import { Component, OnInit } from '@angular/core';
import { Dish } from './dish.model';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  selectedDish : Dish;

  constructor() { }

  ngOnInit() {
  }

  onSelected(dish: Dish) {
    this.selectedDish = dish;
  }
}
