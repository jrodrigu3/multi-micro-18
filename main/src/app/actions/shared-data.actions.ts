import {
  createAction,
  props,
} from '@ngrx/store';

export const setData = createAction(
  '[Shared Data] Set Data',
  props<{ data: string }>()
);

export const addData = createAction(
  '[Shared Data] Add Data',
  props<{ data: string }>()
);

export const increment = createAction(
  '[Shared Data] count Data',
  props<{ data: number }>()
);
