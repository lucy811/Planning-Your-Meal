import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../dish.model';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit {
  @Input() dish: Dish;
  @Input() index: number;

  ngOnInit() {
  }

}
