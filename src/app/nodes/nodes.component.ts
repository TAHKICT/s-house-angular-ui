import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
})
export class NodesComponent {

  @Input() node;

}
