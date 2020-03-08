import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.actions';

export interface CounterState{
  counter:number
}

export const initialState: CounterState = {
  counter: 0
}

const _counterReducer = createReducer(initialState,
  on(increment, state => ({...state, counter: state.counter + 1})),
  on(decrement, state => ({...state, counter: state.counter - 1}))
);

export function counterReducer(state, action){
  return _counterReducer(state,action)
}
