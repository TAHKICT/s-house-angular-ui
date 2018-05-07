import {Component, Input} from '@angular/core';
import {NodesService} from './nodes.service';


@Component({
  selector: 'app-nodes',
  templateUrl: './node.component.html',
})
export class NodeComponent {

 @Input() node;

 constructor(private nodeService: NodesService){}

 switchEvent(node, event) {
   this.nodeService.nodeStateChange(node.id, event.checked);
  }

  isChecked() {
    return this.node.control.value === 'checked';
  }


}
