import { Dish } from '../dishes/dish.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { PreparationListService } from '../preparation-list/preparation-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class DishService {

  dishesChanged = new Subject<Dish[]>();

  dishes: Dish[] = [
    new Dish('Gongbao Chicken',
             'Chinese Food',
             'http://farm7.static.flickr.com/6127/5949832181_d73a87f299_z.jpg',
             [
               new Ingredient('Chicken', 1),
               new Ingredient('Cucumber', 2)
             ]),
    new Dish('Hot dry noodles',
             'Great Noodles',
             'http://www.globaltimes.cn/Portals/0/attachment/2011/5997c21f-a92a-4850-b5a9-bd0e598fd354.jpeg',
             [
              new Ingredient('Noodles', 2),
              new Ingredient('Hot Pepper', 1)
             ]),
  ];

  constructor(private plService: PreparationListService) {}
  
  setDishes(dishes: Dish[]) {
    this.dishes = dishes;
    this.dishesChanged.next(this.dishes.slice());
  }

  getDishes() {
    return this.dishes.slice();
  }

  addIngredientsToShoppingList(dish: Dish) {
    this.plService.addIngredients(dish.ingredients.slice());
  }

  getDish(index: number) {
    return this.dishes[index];
  }

  addDish(dish: Dish) {
    this.dishes.push(dish);
    this.dishesChanged.next(this.dishes.slice());
  }

  updateDish(index: number, dish: Dish) {
    this.dishes[index] = dish;
    this.dishesChanged.next(this.dishes.slice());
  }

  deleteDish(index: number) {
    this.dishes.splice(index, 1);
    this.dishesChanged.next(this.dishes.slice());
  }
}
