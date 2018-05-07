import { Component } from '@angular/core';
import {MenuService} from './menu/menu.service';
import {MenuSortingService} from './menu/menu.sorting.service';
import {NodesService} from './node/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems = [];

  constructor (private menuSortingService: MenuSortingService,
               private menuService: MenuService,
               private nodesService: NodesService) {}

  ngOnInit() {
    console.log('AppComponent');
    this.menuSortingService.navigationCriteriaClickCalled$.subscribe(() => this.loadMenuItems());
    this.menuSortingService.navigationCriteriasLoadedCalled$.subscribe(() => this.loadMenuItems());
  }

  loadMenuItems() {
    this.menuService.getMenuItems().subscribe( menuItems => {
      this.menuItems = menuItems;
      if (this.menuItems.length != 0) {
        this.nodesService.menuItemName = this.menuItems[0];
        this.menuService.menuItemsLoaded();
      }
    });
  }
}
