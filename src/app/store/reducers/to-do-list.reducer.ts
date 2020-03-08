import { createReducer, on, Action } from '@ngrx/store';
import * as toDoActions from '../actions/to-do-list.actions';
import { Todo } from '../../models/todo.model'
import { List } from 'src/app/models/list.model';

export interface ReducerListState {
  list:Todo[];
}

export const initialState: ReducerListState = {
  list: []
};

const addItemReducer = createReducer(
  initialState,
  on(
    toDoActions.loadAllTodos,
    state => state
  ),
  on(
    toDoActions.addItem, (state, {payload}) => {
    return {
      ...state,
      list: [...state.list, payload]
    }
  })
)


export function todoReducer(
  state: ReducerListState | undefined,
  action: Action
) {
  return addItemReducer(state, action);
}
