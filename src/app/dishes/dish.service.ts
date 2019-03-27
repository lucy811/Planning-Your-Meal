import { Dish } from '../dishes/dish.model';
import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class DishService {
  @Output() dishSelected = new EventEmitter<Dish>();

  dishes: Dish[] = [
    new Dish('Gongbao Chicken',
             'Chinese Food',
             'http://farm7.static.flickr.com/6127/5949832181_d73a87f299_z.jpg',
             [
               new Ingredient('chicken', 1),
               new Ingredient('cucumber', 2)
             ]),
    new Dish('Hot dry noodles',
             'Great Noodles',
             'http://www.globaltimes.cn/Portals/0/attachment/2011/5997c21f-a92a-4850-b5a9-bd0e598fd354.jpeg',
             [
              new Ingredient('noodles', 2),
              new Ingredient('hot pepper', 1)
             ]),
  ];

  getDishes() {
    return this.dishes.slice();
  }
}
