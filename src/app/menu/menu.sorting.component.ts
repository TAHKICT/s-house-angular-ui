import {Component} from '@angular/core';
import {MenuSortingService} from './menu.sorting.service';
import {MenuService} from './menu.service';
import {NodesService} from '../node/nodes.service';


@Component({
  selector: 'app-menu-sorting',
  templateUrl: './menu.sorting.component.html',
})
export class MenuSortingComponent {
  menuSortingTypes = [];

  constructor(private menuSortingService:MenuSortingService,
              private  menuService:MenuService,
              private nodesService: NodesService) {}

  ngOnInit(){
    this.menuSortingService.getSortingTypes()
      .subscribe(types => this.menuSortingTypes = types,
        () => console.log('getSortingTypes error'),
        () => {
        if(this.menuSortingTypes.length != 0) {
          this.menuService.setNavigationCriteria(this.menuSortingTypes[0]);
          this.menuSortingService.navigationCriteriasLoaded();
          this.nodesService.navigationCiteria = this.menuSortingTypes[0];
        }
      });
  }

  onSelect(event){
    if(event.source.selected) {
      this.menuService.setNavigationCriteria(event.source.value);
      this.menuSortingService.menuTypeClick();
    }
  }
}
