import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ReducerListState } from '../reducers/to-do-list.reducer'


export const featureStateName = 'todos';

export const getTodoFeatureState = createFeatureSelector<ReducerListState>(featureStateName);

export const getList = createSelector(
  getTodoFeatureState,
  (state: ReducerListState) => state.list
 )
