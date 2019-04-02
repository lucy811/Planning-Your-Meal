import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { PreparationListService } from '../../preparation-list/preparation-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-preparation-edit',
  templateUrl: './preparation-edit.component.html',
  styleUrls: ['./preparation-edit.component.scss']
})
export class PreparationEditComponent implements OnInit {

  constructor(private plService: PreparationListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.plService.addIngredient(newIngredient);
  }
}
