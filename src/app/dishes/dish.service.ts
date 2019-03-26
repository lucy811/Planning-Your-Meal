import { Dish } from '../dishes/dish.model';
import { EventEmitter, Output } from '@angular/core';

export class DishService {
  @Output() dishSelected = new EventEmitter<Dish>();

  dishes: Dish[] = [
    new Dish('Gongbao Chicken',
             'Chinese Food',
             'http://farm7.static.flickr.com/6127/5949832181_d73a87f299_z.jpg'),
    new Dish('Hot dry noodles',
             'Great Noodles',
             'http://www.globaltimes.cn/Portals/0/attachment/2011/5997c21f-a92a-4850-b5a9-bd0e598fd354.jpeg'),
  ];

  getDishes() {
    return this.dishes.slice();
  }
}
