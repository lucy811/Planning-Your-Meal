import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';
import { Store } from '@ngrx/store';
import * as DishActions from '../store/dish.actions';
import * as fromDish from '../store/dish.reducers';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.scss']
})
export class DishEditComponent implements OnInit {
  id: number;
  editMode = false;
  dishForm: FormGroup;

  constructor(private route: ActivatedRoute, private dishService: DishService, private router: Router, public cdRef: ChangeDetectorRef, private store: Store<fromDish.FeatureState>) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params.id;
        this.editMode = params.id != null;
      }
    );
    this.initForm();
    this.cdRef.detectChanges();
  }

  initForm() {
    let name = '';
    let imagePath = '';
    let description = '';
    const dishIngredients = new FormArray([]);

    if (this.editMode) {
      this.store.select('dishes')
        .take(1)
        .subscribe((dishState: fromDish.State) => {
          const dish = dishState.dishes[this.id];
          name = dish.name;
          imagePath = dish.imagePath;
          description = dish.description;

          if (dish['ingredients']) {
            for (const ingredient of dish.ingredients) {
              dishIngredients.push (
                new FormGroup({
                  name: new FormControl(ingredient.name, Validators.required),
                  weight: new FormControl(ingredient.weight, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)])
                })
              );
            }
          }
        });
    }

    this.dishForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: dishIngredients,
    });
  }

  getControl() {
    return (this.dishForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (this.dishForm.get('ingredients') as FormArray).push (
      new FormGroup({
        name: new FormControl(null, Validators.required),
        weight: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (this.dishForm.get('ingredients') as FormArray).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(new DishActions.UpdateDish({
        index: this.id,
        updatedDish: this.dishForm.value
      }));
    } else {
      this.store.dispatch(new DishActions.AddDish(this.dishForm.value));
    }
    this.onCancel();
  }
}
