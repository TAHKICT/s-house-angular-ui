import { Component } from '@angular/core';
import {MenuService} from './menu/menu.service';
import {NodesService} from './nodes/nodes.service';
import {MenuSortingService} from './menu/menu.sorting.service';
import * as $ from 'jquery';
declare var materialize:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuSortingService, MenuService, NodesService]
})
export class AppComponent {
  menuSortingTypes = []
  menuItems = []
  nodes = []


  constructor (private menuSortingService: MenuSortingService,
               private menuService: MenuService,
               private nodesService: NodesService) {}

  ngOnInit(){
    this.menuSortingService.getMenuSortingTypes().subscribe(types => {
      this.menuSortingTypes = types;
    });

    this.menuService.getMenuItems().subscribe( menuItems =>{
      this.menuItems = menuItems;
    });

    this.nodesService.getNodes().subscribe( nodes => {
      this.nodes = nodes;
    });
  }
}
