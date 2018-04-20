import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-sorting',
  templateUrl: './menu.sorting.component.html',
})
export class MenuSortingComponent {

  @Input() sortingType;

}
