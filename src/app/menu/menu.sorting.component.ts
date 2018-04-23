import {Component, Input} from '@angular/core';
import {MenuSortingService} from './menu.sorting.service';

@Component({
  selector: 'app-menu-sorting',
  templateUrl: './menu.sorting.component.html',
})
export class MenuSortingComponent {
  menuSortingTypes = [];

  constructor(menuSortingService:MenuSortingService) {
    menuSortingService.getMenuSortingTypes().subscribe(menuSortingTypes => {
      this.menuSortingTypes = menuSortingTypes;
      console.log(menuSortingTypes);
    });
  }

  onSelect(event){
    console.log('on select: ' + event.source.selected);
  }
}
