import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromDish from '../store/dish.reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {
  dishState: Observable<fromDish.State>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromDish.FeatureState>) { }

  ngOnInit() {
    this.dishState = this.store.select('dishes');
  }

  onNewDish() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
