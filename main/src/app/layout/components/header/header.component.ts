import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { MenuItemRender } from './utils/interfaces/menu-item.interface';
import { arrowNarrowIcon, bluePlusIcon, calendarIcon, checkOutlineIcon, copyIcon, csvFileIcon, dotsVerticalIcon, editIcon, filterLinesIcon, logoNameIcon, menuIcon, searchIcon, txtFileIcon, uploadArrowIcon, xlsFileIcon, xlsxFileIcon } from '../../../shared/const/icons.constans';
import { MenuItems } from './utils/const/menu-item.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  collapsed: boolean = false;
  private destroy$ = new Subject<void>();
  menuItems!: MenuItemRender[];
  showMenuItem: boolean = false;
  icons: { [key: string]: { path: string, alt: string } } = {};
  settingsPath: string = '/new_configuration_layout';
  profilePicture: string = "";

  constructor(
    private _sidebarService: SidebarService
  ) {
    this.icons = this.setIcons();
    this.collapsed = JSON.parse(localStorage.getItem("statusMenu") ?? 'false')
    this.menuItems = MenuItems
  }

  ngOnInit() {
    this.collapsedMenu();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  collapsedMenu() {
    this._sidebarService.collapsedMenuSubject$
    .pipe(
      takeUntil(this.destroy$),
      tap((isVisible) => (this.collapsed = isVisible))
    )
    .subscribe();
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
    const statusMenu = JSON.parse(localStorage.getItem("statusMenu") ?? 'false');
    this.collapsed = !statusMenu;
    this._sidebarService.toggleSidebar();
  }
}
