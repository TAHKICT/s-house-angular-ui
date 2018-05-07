import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NodesService} from '../node/nodes.service';
import {MenuService} from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  @Input() item;

  constructor(private nodeService: NodesService,
              private menuService: MenuService){};

  menuItemClick(item){
    this.nodeService.menuItemName = item;
    this.menuService.menuItemClick();
  }

}
