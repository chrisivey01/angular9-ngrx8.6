import { ActionReducerMap } from "@ngrx/store";
import { todoReducer, ReducerListState } from "./to-do-list.reducer";
import { counterReducer, CounterState } from "./counter.reducer";

export interface AppState {
  todos:ReducerListState,
  counterState:CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  todos:todoReducer,
  counterState: counterReducer
}
