import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from '../../dishes/dish.service';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {
  dishes: Dish[];

  constructor(private dishService: DishService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onNewDish() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
