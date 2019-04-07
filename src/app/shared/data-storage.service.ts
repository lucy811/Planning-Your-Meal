import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DishService } from '../dishes/dish.service';
import { Dish } from '../dishes/dish.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private dishService: DishService) {}

  storeDishes() {
    return this.http.put('https://meal-plan-application.firebaseio.com/dishes.json', this.dishService.getDishes());
  }

  getDishes() {
    this.http.get('https://meal-plan-application.firebaseio.com/dishes.json').map(
      (response: Response) => {
        const dishes: Dish[] = response.json();
        for (const dish of dishes) {
          if (!dish.ingredients) {
            dish.ingredients = [];
          }
        }
        return dishes;
      }
    ).subscribe(
      (dishes: Dish[]) => {
        this.dishService.setDishes(dishes);
      }
    );
  }
}


