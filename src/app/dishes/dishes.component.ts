import { Component, OnInit } from '@angular/core';
import { Dish } from './dish.model';
import { DishService } from '../dishes/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
  providers: [DishService]
})
export class DishesComponent implements OnInit {
  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.dishSelected
    .subscribe (
      (dish: Dish) => {
        this.selectedDish = dish;
      }
    );
  }
}
