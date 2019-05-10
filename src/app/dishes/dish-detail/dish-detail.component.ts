import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish.model';
import { DishService } from '../../dishes/dish.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as PreparationListActions from '../../preparation-list/store/preparation-list.actions';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  @Input() dish: Dish;
  id: number;

  constructor(private dishService: DishService, private router: Router, private route: ActivatedRoute, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params.id;
        this.dish = this.dishService.getDish(this.id);
      }
    );
  }

  addIngredientsToList() {
    // add ingredients
    this.store.dispatch(new PreparationListActions.AddIngredients(this.dish.ingredients));
  }

  onEditDish() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteDish() {
    this.dishService.deleteDish(this.id);
    this.router.navigate(['/dishes']);
  }
}
