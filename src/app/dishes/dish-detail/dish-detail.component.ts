import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../../dishes/dish.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromDish from '../store/dish.reducers';
import * as PreparationListActions from '../../preparation-list/store/preparation-list.actions';
import * as fromApp from '../../store/app.reducers';
import * as DishActions from '../store/dish.actions';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  id: number;
  dishState: Observable<fromDish.State>;

  constructor(private dishService: DishService, private router: Router, private route: ActivatedRoute, private store: Store<fromDish.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params.id;
        this.dishState = this.store.select('dishes');
      }
    );
  }

  addIngredientsToList() {
    this.store.select('dishes')
    .take(1)
    .subscribe((dishState: fromDish.State) => {
      // add ingredients
      this.store.dispatch(new PreparationListActions.AddIngredients(dishState.dishes[this.id].ingredients));
    });
  }

  onEditDish() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteDish() {
    this.store.dispatch(new DishActions.DeleteDish(this.id));
    this.router.navigate(['/dishes']);
  }
}
