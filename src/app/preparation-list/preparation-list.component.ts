import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import * as PreparationListActions from './store/preparation-list.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-preparation-list',
  templateUrl: './preparation-list.component.html',
  styleUrls: ['./preparation-list.component.scss']
})
export class PreparationListComponent implements OnInit {

  preparationListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.preparationListState = this.store.select('preparationList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new PreparationListActions.StartEdit(index));
  }
}
