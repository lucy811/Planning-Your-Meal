import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { PreparationListService } from '../../preparation-list/preparation-list.service';
import { NgForm } from '@angular/forms';
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

  constructor(private plService: PreparationListService) { }

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

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.plService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
