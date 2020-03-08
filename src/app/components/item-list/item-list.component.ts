import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { Store } from '@ngrx/store';
import * as reducers from '../../store/actions/to-do-list.actions';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  item;
  todo: Todo;

  constructor(private store:Store<{todo:Todo}>) { }

  ngOnInit(): void {
  }

  addItem(){
    this.todo = {
      item: this.item,
      checked: false
    }
    this.store.dispatch(reducers.addItem({payload:this.todo}))
  }
}
