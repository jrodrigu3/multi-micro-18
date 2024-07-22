import { isDevMode } from '@angular/core';

import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';

import {
  sharedDataReducer,
  SharedDataState,
} from './shared-data.reducer';

export interface StateMain {
  payment: SharedDataState;
 /*  payOut: SharedDataState; */

}

export const reducers: ActionReducerMap<StateMain> = {
  payment: sharedDataReducer,
/*   payOut: sharedDataReducer, */
};


export const metaReducers: MetaReducer<StateMain>[] = isDevMode() ? [] : [];
