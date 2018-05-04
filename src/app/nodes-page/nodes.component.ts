import {Component, Input} from '@angular/core';
import {NodesService} from './nodes.service';


@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
})
export class NodeComponent {

 @Input() node;

 constructor(private nodeService: NodesService){}

 switchEvent(node, event) {
    // console.log(
    //   'switched ' + node.id
    //   + ' ' + node.control.value
    //   + ' event ' + event);
   this.nodeService.nodeStateChange(node.id, event.checked);
  }

  isChecked() {
    return this.node.control.value === 'checked';
  }


}
