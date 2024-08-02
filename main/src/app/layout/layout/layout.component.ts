import { Component, effect, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';
import { Observable, Subject, tap } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy {

  // isExpanded!: boolean;
  readonly isExpanded: Signal<boolean>;
  isExpanded$: Observable<boolean> = new Observable();
  private _sidebarService = inject(SidebarService);
  private destroy$ = new Subject<void>();

  constructor() {
    this.isExpanded = this._sidebarService.expandedMenuSubjecte.asReadonly();
    effect(()=> console.log(`The value of ${this.isExpanded()} has changed`));
  }

  ngOnInit() {
    this.collapsedMenu();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  collapsedMenu() {
    // this.isExpanded$ = this._sidebarService.expandedMenuSubject$
    //   .pipe(
    //     tap((isVisible) => (this.isExpanded = isVisible))
    //   );
  }

}
