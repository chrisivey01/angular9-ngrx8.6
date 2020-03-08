import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as reducers from '../../store/actions/counter.actions';
import { Todo } from 'src/app/models/todo.model';
import * as fromTodoActions from '../../store/actions/to-do-list.actions';
import * as fromTodo from '../../store/reducers/to-do-list.reducer';
import * as selectors from '../../store/selectors/to-do-list.selectors';
import { getList } from '../../store'

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  count$: Observable<any>;
  list$: Observable<Todo[]>
  items;

  constructor(private store:Store<fromTodo.ReducerListState>) {
   }

  increment() {
    this.store.dispatch(reducers.increment());
  }

  decrement() {
    this.store.dispatch(reducers.decrement());
  }



  ngOnInit(): void{
    this.list$ = this.store.pipe(select(getList));
    this.store.dispatch(fromTodoActions.loadAllTodos())

  }
}
