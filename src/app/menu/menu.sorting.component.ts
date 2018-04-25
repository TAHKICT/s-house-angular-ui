import {Component, Input} from '@angular/core';
import {MenuSortingService} from './menu.sorting.service';


@Component({
  selector: 'app-menu-sorting',
  templateUrl: './menu.sorting.component.html',
})
export class MenuSortingComponent {
  menuSortingTypes = [];

  constructor(private menuSortingService:MenuSortingService) {
    // this.menuSortingService = menuSortingService.menuSortingTypes;
  }

  onSelect(event){
    if(event.source.selected) {
      this.menuSortingService.setSortingCriteria(event.source.value);
    }
  }
}
