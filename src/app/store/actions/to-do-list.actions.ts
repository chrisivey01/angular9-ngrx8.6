import { createAction, props } from '@ngrx/store'
import { Todo } from 'src/app/models/todo.model';
import { List } from 'src/app/models/list.model';

export const loadAllTodos = createAction('Load Todos');
export const addItem = createAction('AddItem', props<{payload:Todo}>());

