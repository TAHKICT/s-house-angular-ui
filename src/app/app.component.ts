import { Component } from '@angular/core';
import {MenuService} from './menu/menu.service';
import {NodesService} from './nodes-page/nodes.service';
import {MenuSortingService} from './menu/menu.sorting.service';
import {MainPageComponent} from './main-page/main-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuSortingService,MenuService,NodesService,MainPageComponent]
})
export class AppComponent {
  menuItems = [];

  constructor (private menuSortingService: MenuSortingService,
               private menuService: MenuService){}

  ngOnInit(){
    this.loadMenuItems();
  }

  loadMenuItems(){
    this.menuService.getMenuItems().subscribe( menuItems =>{
      this.menuItems = menuItems;
    });
    console.log("menuItems: " + this.menuItems);
  }
}
