import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import * as fromPreprationList from '../preparation-list/store/preparation-list.reducers';
import * as PreparationListActions from './store/preparation-list.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-preparation-list',
  templateUrl: './preparation-list.component.html',
  styleUrls: ['./preparation-list.component.scss']
})
export class PreparationListComponent implements OnInit {

  preparationListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<fromPreprationList.AppState>) { }

  ngOnInit() {
    this.preparationListState = this.store.select('preparationList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new PreparationListActions.StartEdit(index));
  }
}
