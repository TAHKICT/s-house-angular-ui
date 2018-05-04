import {Component} from '@angular/core';
import {NodesService} from '../nodes-page/nodes.service';
import {MenuService} from '../menu/menu.service';
import {Subscription} from 'rxjs/Subscription';
import {Message} from '@stomp/stompjs';
import {Observable} from 'rxjs/Observable';
import {StompService} from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nodes = []

  constructor (private nodesService: NodesService,
               private menuService: MenuService,
               private _stompService: StompService) {}

  ngOnInit(){
    this.menuService.menuItemClickCalled$.subscribe(
      () => {
        this.loadNodes();
      }
    );

    this.nodesService.nodeStateChangeCalled$.subscribe(
      (node) => {
          this.sendNodeChangeMessage(node.nodeId, node.value);
      }
    )

    if (this.nodesService.type != null && this.nodesService.name != null) {
      this.loadNodes();
    }

    //web sockets**********
    this.subscribed = false;

    // Store local reference to Observable
    // for use with template ( | async )
    this.subscribe();
    //**********************
  }

  loadNodes(){
      this.nodesService.getNodes().subscribe( nodes => {
        this.nodes = nodes;
      });
  }

  //web sockets**********
  // Stream of messages
  private subscription: Subscription;
  public messages: Observable<Message>;

  // Subscription status
  public subscribed: boolean;

  public subscribe() {
    if (this.subscribed) {
      return;
    }

    // Stream of messages
    this.messages = this._stompService.subscribe('/to-user/messages');

    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(this.on_next);

    this.subscribed = true;
  }

  public on_next = (message: Message) => {
    console.log(JSON.parse(message.body).nodeId);

    let mess = JSON.parse(message.body);

    this.nodes.forEach(node => {
      if(node.id == mess.nodeId)
        node.control.value = mess.value;
    });
  }

  public sendNodeChangeMessage(nodeId, value) {
    console.log('send');
    this._stompService.publish('/s-house-rest-api-web-websocket/to-server',
      `{ nodeId: ${nodeId}, value: ${value}`);
  }
  //**********************

}
