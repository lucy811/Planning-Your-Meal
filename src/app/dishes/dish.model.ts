import { Ingredient } from '../shared/ingredient.model';

export class Dish {
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredient: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredient;
  }
}
