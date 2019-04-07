import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DishService } from '../dishes/dish.service';
import { Dish } from '../dishes/dish.model';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private dishService: DishService) {}

  storeDishes() {
    return this.http.put('https://meal-plan-application.firebaseio.com/dishes.json', this.dishService.getDishes());
  }

  getDishes() {
    this.http.get('https://meal-plan-application.firebaseio.com/dishes.json').subscribe(
      (response: Response) => {
        const dishes: Dish[] = response.json();
        this.dishService.setDishes(dishes);
      }
    )
  }
}


