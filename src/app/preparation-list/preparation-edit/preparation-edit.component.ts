import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { PreparationListService } from '../../preparation-list/preparation-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preparation-edit',
  templateUrl: './preparation-edit.component.html',
  styleUrls: ['./preparation-edit.component.scss']
})
export class PreparationEditComponent implements OnInit {
  subscription: Subscription;
  editNumber: number;
  editMode = false;

  constructor(private plService: PreparationListService) { }

  ngOnInit() {
    this.subscription = this.plService.startedEditing
    .subscribe(
      (index: number) => {
        this.editNumber = index;
        this.editMode = true;
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.plService.addIngredient(newIngredient);
  }

  ngOnDestory() {
    this.subscription.unsubscribe;
  }
}
