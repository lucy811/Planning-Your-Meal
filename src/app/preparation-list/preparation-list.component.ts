import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { PreparationListService } from '../preparation-list/preparation-list.service';

@Component({
  selector: 'app-preparation-list',
  templateUrl: './preparation-list.component.html',
  styleUrls: ['./preparation-list.component.scss']
})
export class PreparationListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private plService: PreparationListService) { }

  ngOnInit() {
    this.ingredients = this.plService.getIngredients();
    this.plService.ingredientsChanged
    .subscribe (
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
