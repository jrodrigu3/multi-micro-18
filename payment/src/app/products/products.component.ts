import {
  Component,
  OnInit,
  signal,
} from '@angular/core';

import { Store } from '@ngrx/store';

import {
  increment,
  setData,
} from '../actions/shared-data.actions';
import { StateMain } from '../reducers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  sharedData: string[] = [];
  numero = 0;
  count = signal(0);

  constructor(private store: Store<StateMain>) { }

  ngOnInit() {
    this.store.select(state => state.payment.count).subscribe(data => {
      debugger;
      this.numero = data
    });
  }

  addMessage() {
    this.store.dispatch(setData({ data: 'Hello from Payment' }));
  }

  increment() {
    debugger;
    this.store.dispatch(increment({ data: this.numero + 1 }));
    this.numero = this.numero + 1;
    this.count.set(this.numero);
  }
  restar() {
    this.store.dispatch(increment({ data: this.numero - 1 }));
    this.numero = this.numero - 1;
    this.count.set(this.numero);
  }
}
