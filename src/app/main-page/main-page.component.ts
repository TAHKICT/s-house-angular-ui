import {Component} from '@angular/core';
import {NodesService} from '../nodes-page/nodes.service';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nodes = []

  constructor (private nodesService: NodesService,
               private menuService: MenuService) {}

  ngOnInit(){
    console.log('MainPageComponent')
    this.menuService.menuItemClickCalled$.subscribe(
      () => {
        this.loadNodes();
      }
    );

    if(this.nodesService.type != null && this.nodesService.name != null)
      this.loadNodes();
  }

  loadNodes(){
      this.nodesService.getNodes().subscribe( nodes => {
        this.nodes = nodes;
      });
  }
}
