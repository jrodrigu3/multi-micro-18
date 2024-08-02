import { Component, effect, inject, OnDestroy, OnInit, Signal } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { bluePlusIcon, dropMenuIcon, logInIcon, logoKIcon, logoNameIcon } from '../../../shared/const/icons.constans';
import { MenuItems } from '../../../shared/const/menu-item.constants';
import { MenuItemRender } from '../header/utils/interfaces/menu-item.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {

  menuItems: MenuItemRender[] = [];
  icons: { [key: string]: { path: string, alt: string } } = {};
  // isExpanded!: boolean;
  readonly isExpanded: Signal<boolean>;
  isExpanded$: Observable<boolean> = new Observable();
  private destroy$ = new Subject<void>();
  private _sidebarService = inject(SidebarService);

  constructor() {
    this.icons = this.setIcons();
    this.menuItems = MenuItems;
    this.isExpanded = this._sidebarService.expandedMenuSubjecte.asReadonly();
    effect(()=> console.log(`The value of ${this.isExpanded()} has changed`));
  }

  ngOnInit() {
    // this.collapsedMenu();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleCollapsed() {
    if (this.isExpanded()) {
      this.toggleSidebar();
    } else {
      this.menuItems.forEach(el => el.expanded = false);
      setTimeout(() => {
        this.toggleSidebar();
      }, 300)
    }
  }


  toggleExpansion(item: MenuItemRender) {
    item.expanded = !item.expanded;
    if (!this.isExpanded) {
      this.toggleCollapsed();
    }
  }

  setIcons(): { [key: string]: { path: string, alt: string } } {
    return {
      logIn: logInIcon,
      dropMenu: dropMenuIcon,
      bluePlus: bluePlusIcon,
      logoName: logoNameIcon,
      logoK: logoKIcon
    };
  }

  toggleSidebar() {
    this._sidebarService.toggleSidebare();
  }

}
