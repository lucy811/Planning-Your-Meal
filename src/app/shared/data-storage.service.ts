import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { DishService } from '../dishes/dish.service';
import { Dish } from '../dishes/dish.model';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private dishService: DishService) {}

  storeDishes() {
    const req = new HttpRequest('PUT', 'https://meal-plan-application.firebaseio.com/dishes.json', this.dishService.getDishes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getDishes() {
    this.httpClient.get<Dish[]>('https://meal-plan-application.firebaseio.com/dishes.json', {
      observe: 'body',
      responseType: 'json'
    }).pipe(map(
      (dishes) => {
        for (const dish of dishes) {
          if (!dish.ingredients) {
            dish.ingredients = [];
          }
        }
        return dishes;
      }
    )).subscribe(
      (dishes: Dish[]) => {
        this.dishService.setDishes(dishes);
      }
    );
  }
}


