import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { HttpClient, HttpRequest } from '@angular/common/http';
import * as DishActions from '../store/dish.actions';
import { Dish } from '../dish.model';

@Injectable()
export class DishEffects {
@Effect()
dishFetch = this.action$
   .pipe(ofType(DishActions.FETCH_DISHES))
   .switchMap((action: DishActions.FetchDishes) => {
      return this.httpClient.get<Dish[]>('https://meal-plan-application.firebaseio.com/dishes.json', {
        observe: 'body',
        responseType: 'json'
      })
   })  
   .map(
    (dishes) => {
      console.log(dishes);
      for (let dish of dishes) {
        if (!dish['ingredients']) {
          dish['ingredients'] = [];
        }
      }

      return {
        type: DishActions.SET_DISHES,
        payload: dishes
      }
    }
   );

  constructor(private action$: Actions, private httpClient: HttpClient) {}
}