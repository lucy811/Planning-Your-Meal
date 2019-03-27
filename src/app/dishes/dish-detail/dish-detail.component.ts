import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish.model';
import { DishService } from '../../dishes/dish.service';
@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  @Input() dish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
  }

  addIngredientsToList() {
    this.dishService.addIngredientsToShoppingList(this.dish);
  }
}
