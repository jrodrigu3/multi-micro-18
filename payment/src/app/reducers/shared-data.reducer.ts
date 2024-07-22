import {
  createReducer,
  on,
} from '@ngrx/store';

import {
  increment,
  setData,
} from '../actions/shared-data.actions';

export interface SharedDataState {
  dataString: string[];
  count: number;
}

export const initialState: SharedDataState = {
  dataString: [],
  count: 0
};

export const sharedDataReducer = createReducer(
  initialState,
  on(setData, (state, { data }) => ({ ...state, dataString: [data] })),
  on(increment, (state, { data }) => ({ ...state, count: data })),
);
