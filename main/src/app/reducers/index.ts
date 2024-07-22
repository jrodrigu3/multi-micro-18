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
  sharedData: SharedDataState;
  payment: SharedDataState;

}

export const reducers: ActionReducerMap<StateMain> = {
  sharedData: sharedDataReducer,
  payment: sharedDataReducer

};


export const metaReducers: MetaReducer<StateMain>[] = isDevMode() ? [] : [];
