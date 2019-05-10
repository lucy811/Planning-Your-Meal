import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import * as PreparationListActions from '../store/preparation-list.actions';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-preparation-edit',
  templateUrl: './preparation-edit.component.html',
  styleUrls: ['./preparation-edit.component.scss']
})
export class PreparationEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItem: Ingredient;
  @ViewChild('f') plForm: NgForm;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('preparationList')
    .subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editedItem = data.editedIngredient;
          this.editMode = true;
          this.plForm.setValue({
            name: this.editedItem.name,
            weight: this.editedItem.weight
          });
        } else {
          this.editMode = false;
        }
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.weight);

    if (this.editMode === true) {
      // update ingredient at index position
      this.store.dispatch(new PreparationListActions.UpdateIngredient({ingredient: newIngredient}));
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
    // Delete an ingredient
    this.store.dispatch(new PreparationListActions.DeleteIngredient());
    this.onClear();
  }

  ngOnDestroy() {
    this.store.dispatch(new PreparationListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
