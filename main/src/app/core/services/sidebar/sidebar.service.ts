import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  expandedMenuSubjecte: WritableSignal<boolean> = signal<boolean>(false);

  constructor() { }

  toggleSidebare() {
    this.expandedMenuSubjecte.update(value => !value);
  }

  select(): Signal<boolean> {
    return computed(() => this.expandedMenuSubjecte());
  }
}
