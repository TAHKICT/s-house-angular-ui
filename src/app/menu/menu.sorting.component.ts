import {Component} from '@angular/core';
import {MenuSortingService} from './menu.sorting.service';
import {MenuService} from './menu.service';


@Component({
  selector: 'app-menu-sorting',
  templateUrl: './menu.sorting.component.html',
})
export class MenuSortingComponent {
  menuSortingTypes = [];

  constructor(private menuSortingService:MenuSortingService,
              private  menuService:MenuService) {
    this.menuSortingService.getSortingTypes().subscribe(types => this.menuSortingTypes = types);
  }

  onSelect(event){
    if(event.source.selected) {
      this.menuService.setSortingCriteria(event.source.value);
      this.menuSortingService.menuTypeClick();
    }
  }
}
