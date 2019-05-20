import { Dish } from '../dish.model';
import { Ingredient } from '../../shared/ingredient.model';
import * as DishActions from './dish.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
  dishes: State;
}

export interface State {
  dishes: Dish[];
}

const initialState: State = {
  dishes: [
    new Dish('Gongbao Chicken',
             'Chinese Food',
             'http://farm7.static.flickr.com/6127/5949832181_d73a87f299_z.jpg',
             [
               new Ingredient('Chicken', 1),
               new Ingredient('Cucumber', 2)
             ]),
    new Dish('Hot dry noodles',
             'Great Noodles',
             'http://www.globaltimes.cn/Portals/0/attachment/2011/5997c21f-a92a-4850-b5a9-bd0e598fd354.jpeg',
             [
              new Ingredient('Noodles', 2),
              new Ingredient('Hot Pepper', 1)
             ])
  ]
};

export function dishReducer(state = initialState, action: DishActions.DishActions) {
  switch (action.type) {
    case (DishActions.SET_DISHES):
    return {
      ...state,
      dishes: [...action.payload]
    };
    case (DishActions.ADD_DISH):
    return {
      ...state,
      dishes: [...state.dishes, action.payload]
    };
    case (DishActions.UPDATE_DISH):
      const dish = state.dishes[action.payload.index];
      const updatedDish = {
        ...dish,
        ...action.payload.updatedDish
      };
      const dishes = [...state.dishes];
      dishes[action.payload.index] = updatedDish;
      return {
        ...state,
        dishes: dishes
      };
    case (DishActions.DELETE_DISH):
      const oldDishes = [...state.dishes];
      oldDishes.splice(action.payload, 1);
      return {
        ...state,
        dishes: oldDishes
      };
    default:
      return state;
  }
}

