import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DishService } from '../dishes/dish.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private dishService: DishService) {}

  storeDishes() {
    return this.http.put('https://meal-plan-application.firebaseio.com/dishes.json', this.dishService.getDishes());
  }
}


