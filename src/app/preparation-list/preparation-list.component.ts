import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { PreparationListService } from '../preparation-list/preparation-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preparation-list',
  templateUrl: './preparation-list.component.html',
  styleUrls: ['./preparation-list.component.scss']
})
export class PreparationListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private plService: PreparationListService) { }

  ngOnInit() {
    this.ingredients = this.plService.getIngredients();
    this.subscription = this.plService.ingredientsChanged
    .subscribe (
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
