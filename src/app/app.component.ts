import { Component } from '@angular/core';
import {MenuService} from './menu/menu.service';
import {MenuSortingService} from './menu/menu.sorting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  menuItems = [];

  constructor (private menuSortingService: MenuSortingService,
               private menuService: MenuService){}

  ngOnInit(){
    console.log('AppComponent');
    this.menuSortingService.menuTypeClickCalled$.subscribe(() => this.loadMenuItems());
    this.menuSortingService.menuTypesLoadedCalled$.subscribe(() => this.loadMenuItems());
  }

  loadMenuItems(){
    this.menuService.getMenuItems().subscribe( menuItems =>{
      this.menuItems = menuItems;
    });
  }
}
