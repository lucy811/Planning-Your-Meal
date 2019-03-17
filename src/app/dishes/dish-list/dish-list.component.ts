import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {

  dishes: Dish[] = [
    new Dish('Gongbao Chicken', 'Chinese Food', 'http://farm7.static.flickr.com/6127/5949832181_d73a87f299_z.jpg'),
    new Dish('Hot dry noodles', 'Great Noodles', 'http://www.globaltimes.cn/Portals/0/attachment/2011/5997c21f-a92a-4850-b5a9-bd0e598fd354.jpeg'),
  ];

  constructor() { }

  ngOnInit() {
  }
}
