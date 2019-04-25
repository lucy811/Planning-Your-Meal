import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { PreparationListService } from './preparation-list.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-preparation-list',
  templateUrl: './preparation-list.component.html',
  styleUrls: ['./preparation-list.component.scss']
})
export class PreparationListComponent implements OnInit {

  preparationListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private plService: PreparationListService, private store: Store<{preparationList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.preparationListState = this.store.select('preparationList');
  }

  onEditItem(index: number) {
    this.plService.startedEditing.next(index);
  }
}
