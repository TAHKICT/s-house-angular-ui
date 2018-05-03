import {Component, Input} from '@angular/core';
import {StompService} from '@stomp/ng2-stompjs';


@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
})
export class NodesComponent {

 @Input() node;

  // Subscription status
  public subscribed: boolean;

 constructor(private _stompService: StompService){}

  public subscribe() {
    if (this.subscribed) {
      return;
    }

    // Stream of messages
    // this.messages = this._stompService.subscribe('/topic/ng-demo-sub');
    this.messages = this._stompService.subscribe('/to-user/messages');

    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(this.on_next);

    this.subscribed = true;
  }

}
