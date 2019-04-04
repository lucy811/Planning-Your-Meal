import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-dish-edit',
  templateUrl: './dish-edit.component.html',
  styleUrls: ['./dish-edit.component.scss']
})
export class DishEditComponent implements OnInit {
  id: number;
  editMode = false;
  dishForm: FormGroup;

  constructor(private route: ActivatedRoute, private dishService: DishService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = + params['id'];
        this.editMode = params['id'] != null;
      }
    );
    this.initForm();
  }

  initForm() {
    let dishName = '';
    let imagePath = '';
    let dishDescription = '';
    const dishIngredients = new FormArray([]);

    if (this.editMode) {
      const dish = this.dishService.getDish(this.id);
      dishName = dish.name;
      imagePath = dish.imagePath;
      dishDescription = dish.description;

      if (dish.ingredients) {
        for (const ingredient of dish.ingredients) {
          dishIngredients.push (
            new FormGroup({
              'ingredientName': new FormControl(ingredient.name, Validators.required),
              'weight': new FormControl(ingredient.weight, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.dishForm = new FormGroup({
      'dishName': new FormControl(dishName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'dishDescription': new FormControl(dishDescription, Validators.required),
      'ingredients': dishIngredients,
    });
  }

  getControl() {
    return (this.dishForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (this.dishForm.get('ingredients') as FormArray).push (
      new FormGroup({
        'ingredientName': new FormControl(null, Validators.required),
        'weight': new FormControl(null, [Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onSubmit() {
    // Convert dishForm value to dish type object
    const value = this.dishForm.value;
    const newDish = new Dish(value.dishName, value.dishDescription, value.imagePath, value.ingredients);
    if (this.editMode) {
      this.dishService.updateDish(this.id, newDish);
    } else {
      this.dishService.addDish(newDish);
    }
    this.onCancel();
  }
}
