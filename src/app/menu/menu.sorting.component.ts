import {Component, Input} from '@angular/core';
import {MenuSortingService} from './menu.sorting.service';
import {MenuService} from './menu.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-menu-sorting',
  templateUrl: './menu.sorting.component.html',
})
export class MenuSortingComponent {
  menuSortingTypes = [];

  constructor(private menuSortingService:MenuSortingService,
              private menuService:MenuService,
              private appComponent:AppComponent) {
    menuSortingService.getMenuSortingTypes().subscribe(menuSortingTypes => {
      this.menuSortingTypes = menuSortingTypes;
      console.log(menuSortingTypes);
    });
  }

  onSelect(event){
    if(event.source.selected) {
      this.menuService.setSortingCriteria(event.source.value);
      this.appComponent.updateMenuItems();
    }
  }
}
