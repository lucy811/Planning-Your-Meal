import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DishService } from '../dishes/dish.service';
import { AuthService } from '../auth/auth.service';
import { Dish } from '../dishes/dish.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private dishService: DishService, private authService: AuthService) {}

  storeDishes() {
    const token = this.authService.getToken();
    return this.http.put('https://meal-plan-application.firebaseio.com/dishes.json?auth=' + token, this.dishService.getDishes());
  }

  getDishes() {
    const token = this.authService.getToken();
    this.http.get('https://meal-plan-application.firebaseio.com/dishes.json?auth=' + token).map(
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


