import { Component } from '@angular/core';
import {MenuService} from './menu/menu.service';
import {NodesService} from './nodes/nodes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuService, NodesService]
})
export class AppComponent {
  menuItems = []
  nodes = []


  constructor (private menuService: MenuService,
               private nodesService: NodesService) {}

  ngOnInit(){
    this.updateMenuItems();

    this.nodesService.getNodes().subscribe( nodes => {
      this.nodes = nodes;
    })
  }

  updateMenuItems(){
    this.menuService.getMenuItems().subscribe( menuItems =>{
      this.menuItems = menuItems;
    });
  }
}
