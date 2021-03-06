import {Component, Input} from '@angular/core';

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'app-nodes-card',
  templateUrl: 'nodes-card.component.html',
  styleUrls: ['nodes-card.component.scss'],
})
export class NodesCardComponent {

  @Input() nodesCard;

}
