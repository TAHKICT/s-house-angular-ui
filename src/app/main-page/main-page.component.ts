import {Component} from '@angular/core';
import {NodesService} from '../nodes-page/nodes.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nodes = []

  constructor (private nodesService: NodesService) {}

  loadNodes(){
    console.log('load nodes');
      this.nodesService.getNodes('type', 'light').subscribe( nodes => {
        console.log(nodes);
        this.nodes = nodes;
      });
  }
}
