import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class PreparationListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Banana', 3),
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
