import { Ingredient } from '../../shared/ingredient.model';
import * as PreparationListActions from './preparation-list.actions';

export interface AppState {
  preparationList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initalState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editedIngredient: null,
  editedIngredientIndex:  -1
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
    case PreparationListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {...ingredient, ...action.payload.ingredient};
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case PreparationListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case PreparationListActions.START_EDIT:
    const editedIngredient = {...state.ingredients[action.payload]};
    return {
      ...state,
      editedIngredient: editedIngredient,
      editedIngredientIndex: action.payload
    };
    case PreparationListActions.STOP_EDIT:
    return {
      ...state,
      editedIngredient: null,
      editedIngredientIndex: -1
    };
    default:
    return state;
  }
}
