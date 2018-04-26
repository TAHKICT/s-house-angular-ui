import {Component, Input} from '@angular/core';
import {NodesService} from '../nodes-page/nodes.service';
import {MainPageComponent} from '../main-page/main-page.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  @Input() item;

  constructor(private nodeService: NodesService,
              private mainPage: MainPageComponent
  ){};

  menuItemClick(item){
    this.nodeService.name = item;
    this.mainPage.loadNodes();
  }

}
