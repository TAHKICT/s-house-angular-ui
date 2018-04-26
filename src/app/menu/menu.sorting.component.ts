import {Component} from '@angular/core';
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
              private  menuService:MenuService,
              private  appComponent: AppComponent) {
    this.menuSortingService.loadSortingTypes().subscribe(types => this.menuSortingTypes = types);
  }

  onSelect(event){
    if(event.source.selected) {
      this.menuService.setSortingCriteria(event.source.value);
      this.appComponent.loadMenuItems();
    }
  }
}
