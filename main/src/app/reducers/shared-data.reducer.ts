import {
  createReducer,
  on,
} from '@ngrx/store';

import {
  addData,
  setData,
} from '../actions/shared-data.actions';

export interface SharedDataState {
  dataState: string[];
  count: number;
}

export const initialState: SharedDataState = {
  dataState: [],
  count: 0
};

export const sharedDataReducer = createReducer(
  initialState,
  on(setData, (state, { data }) => ({ ...state, data: [data] })),
  on(addData, (state, { data }) => ({ ...state, data: [...state.dataState, data] })),
);
