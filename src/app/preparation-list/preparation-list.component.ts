import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-preparation-list',
  templateUrl: './preparation-list.component.html',
  styleUrls: ['./preparation-list.component.scss']
})
export class PreparationListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 3),
  ];

  constructor() { }

  ngOnInit() {
  }

  AddPrepartionList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
