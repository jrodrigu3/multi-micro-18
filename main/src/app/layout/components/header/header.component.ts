import { Component, effect, inject, OnDestroy, OnInit, Signal, WritableSignal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { MenuItemRender } from './utils/interfaces/menu-item.interface';
import { arrowNarrowIcon, bluePlusIcon, calendarIcon, checkOutlineIcon, copyIcon, csvFileIcon, dotsVerticalIcon, editIcon, filterLinesIcon, logoNameIcon, menuIcon, searchIcon, txtFileIcon, uploadArrowIcon, xlsFileIcon, xlsxFileIcon } from '../../../shared/const/icons.constans';
import { HeaderMenuItems } from './utils/const/header-menu-item.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  readonly isExpanded: Signal<boolean>;
  private destroy$ = new Subject<void>();
  menuItems!: MenuItemRender[];
  showMenuItem: boolean = false;
  icons: { [key: string]: { path: string, alt: string } } = {};
  settingsPath: string = '/new_configuration_layout';
  profilePicture: string = "";

  private _sidebarService = inject(SidebarService);

  constructor() {
    this.icons = this.setIcons();
    this.menuItems = HeaderMenuItems;
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
    // this._sidebarService.expandedMenuSubject$
    // .pipe(
    //   takeUntil(this.destroy$),
    //   tap((isVisible) => (this.isExpanded = isVisible))
    // )
    // .subscribe();
    // this.isExpanded = this._sidebarService.expandedMenuSubject();
  }

  setIcons(): { [key: string]: { path: string, alt: string } } {
    return {
      bluePlus: bluePlusIcon,
      searchIcon: searchIcon,
      filterLines: filterLinesIcon,
      dotsVertical: dotsVerticalIcon,
      edit: editIcon,
      copy: copyIcon,
      uploadArrow: uploadArrowIcon,
      calendar: calendarIcon,
      txtFile: txtFileIcon,
      xlsFile: xlsFileIcon,
      xlsxFile: xlsxFileIcon,
      csvFile: csvFileIcon,
      arrow: arrowNarrowIcon,
      checkOutline: checkOutlineIcon,
      menu: menuIcon,
      logoName: logoNameIcon
    };
  }

  toggleDateRangePicker() {
    this.showMenuItem = !this.showMenuItem;
  }

  toggleCollapsed() {
    this._sidebarService.toggleSidebare();
  }
}
