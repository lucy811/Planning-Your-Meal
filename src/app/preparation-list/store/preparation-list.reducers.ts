import { Ingredient } from '../../shared/ingredient.model';
import * as PreparationListActions from './preparation-list.actions';

const initalState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function preparationListReducer(state = initalState, action: PreparationListActions.PreparationListActions) {
  switch (action.type) {
    case PreparationListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case PreparationListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    default:
    return state;
  }
}
