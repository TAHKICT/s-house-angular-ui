import {Component, Input} from '@angular/core';
import {NodesService} from './nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
})
export class NodesComponent {

 @Input() node;

}
