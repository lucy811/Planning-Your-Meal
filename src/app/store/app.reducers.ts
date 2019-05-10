import { ActionReducerMap } from '@ngrx/store';

import * as fromPreparationList from '../preparation-list/store/preparation-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState {
  preparationList: fromPreparationList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  preparationList: fromPreparationList.preparationListReducer,
  auth: fromAuth.authReducer,
};

