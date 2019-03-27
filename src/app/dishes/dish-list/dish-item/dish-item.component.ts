import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../../dish.model';
import { DishService } from '../../../dishes/dish.service';

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent implements OnInit {
  @Input() dish: Dish;

  constructor(private dishService: DishService) { }

  ngOnInit() {
  }

  onSelected() {
    this.dishService.dishSelected.emit(this.dish);
  }
}
