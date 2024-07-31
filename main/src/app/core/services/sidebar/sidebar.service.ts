import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private collapsedMenuSubject = new BehaviorSubject<boolean>(false);
  collapsedMenuSubject$ = this.collapsedMenuSubject.asObservable();

  constructor() { }

  toggleSidebar() {
    this.collapsedMenuSubject.next(!this.collapsedMenuSubject.value);
    localStorage.setItem('statusMenu', JSON.stringify(!this.collapsedMenuSubject.value));
  }
}
