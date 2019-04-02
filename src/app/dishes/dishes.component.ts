import { Component, OnInit } from '@angular/core';
import { DishService } from '../dishes/dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
  providers: [DishService]
})
export class DishesComponent implements OnInit {

  ngOnInit() {
  }

}
