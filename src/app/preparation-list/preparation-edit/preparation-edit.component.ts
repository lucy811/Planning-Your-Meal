import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { PreparationListService } from '../../preparation-list/preparation-list.service';
import * as PreparationListActions from '../store/preparation-list.actions';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-preparation-edit',
  templateUrl: './preparation-edit.component.html',
  styleUrls: ['./preparation-edit.component.scss']
})
export class PreparationEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editNumber: number;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('f') plForm: NgForm;

  constructor(private plService: PreparationListService, private store: Store<{preparationList: {ingredients: Ingredient[]}}>) { }

  ngOnInit() {
    this.subscription = this.plService.startedEditing
    .subscribe(
      (index: number) => {
        this.editNumber = index;
        this.editMode = true;
        this.editedItem = this.plService.getIngredient(index);
        this.plForm.setValue({
          name : this.editedItem.name,
          weight: this.editedItem.weight
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.weight);

    if (this.editMode === true) {
      this.plService.updateIngredient(this.editNumber, newIngredient);
    } else {
      // add a new ingredient
      this.store.dispatch(new PreparationListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    this.plForm.reset();
  }

  onClear() {
    this.plForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.plService.deleteIngredient(this.editNumber);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
