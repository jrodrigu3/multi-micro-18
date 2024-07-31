import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  sidebarVisible: boolean = true;

  constructor(private _sidebarService: SidebarService) {}

  ngOnInit() {
    this._sidebarService.collapsedMenuSubject$.subscribe(
      (isVisible) => (this.sidebarVisible = isVisible)
    );
  }

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
    this._sidebarService.toggleSidebar();
  }

}
