import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish.model';
import { DishService } from '../../dishes/dish.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  @Input() dish: Dish;
  id: number;

  constructor(private dishService: DishService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params['id'];
        this.dish = this.dishService.getDish(this.id);
      }
    )
  }

  addIngredientsToList() {
    this.dishService.addIngredientsToShoppingList(this.dish);
  }
}
