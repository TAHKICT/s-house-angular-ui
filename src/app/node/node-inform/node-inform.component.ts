import {Component, Input} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-node-inform',
  templateUrl: 'node-inform.component.html',
  // styleUrls: ['nodes-card.component.scss'],
})
export class NodesCardComponent {

  @Input() node;

}
