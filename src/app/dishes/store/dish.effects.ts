import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, withLatestFrom, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromDish from '../store/dish.reducers';

import { HttpClient, HttpRequest } from '@angular/common/http';
import * as DishActions from '../store/dish.actions';
import { Dish } from '../dish.model';

@Injectable()
export class DishEffects {
@Effect()
dishFetch = this.action$
   .pipe(ofType(DishActions.FETCH_DISHES))
   .pipe(switchMap((action: DishActions.FetchDishes) => {
      return this.httpClient.get<Dish[]>('https://meal-plan-application.firebaseio.com/dishes.json', {
        observe: 'body',
        responseType: 'json'
      });
   })
   ,map(
    (dishes) => {
      for (const dish of dishes) {
        if (!dish['ingredients']) {
          dish['ingredients'] = [];
        }
      }

      return {
        type: DishActions.SET_DISHES,
        payload: dishes
      };
    }
   ));

  @Effect({dispatch: false })
  dishStore = this.action$
    .pipe(ofType(DishActions.STORE_DISHES))
    .pipe(withLatestFrom(this.store.select('dishes')),
    switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://meal-plan-application.firebaseio.com/dishes.json',
        state.dishes, {reportProgress: true});
        return this.httpClient.request(req);
    }));

  constructor(private action$: Actions, private httpClient: HttpClient, private store: Store<fromDish.FeatureState>) {}
}
