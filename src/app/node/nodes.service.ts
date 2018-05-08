import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NodesService {
  // Observable string sources
  private nodeStateChangeCallSource = new Subject<any>();

  // Observable string streams
  nodeStateChangeCalled$ = this.nodeStateChangeCallSource.asObservable();

  nodeStateChange(nodeId, value) {
    this.nodeStateChangeCallSource.next({nodeId: nodeId, value: value});
    // console.log('NodesService. nodeStateChange: ' + nodeId + ' | ' + value);
  }

  navigationCiteria;
  menuItemName;

  constructor(private httpClient: HttpClient) {}

  getNodes() {
    return this.httpClient.post<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/content/get-nodes', {
      type: this.navigationCiteria,
      name: this.menuItemName,
      activeOnly: true
    });
  }

  generateNodesCards (nodes) {
    const cardsMap = new Map();
    for (let i = 0; i < nodes.length; i++) {
      if (this.navigationCiteria === 'type') {
        if (cardsMap.get(nodes[i].nodeLocation) == null) {
          const nodesInMap = [nodes[i]];
          cardsMap.set(nodes[i].nodeLocation, nodesInMap);
        } else {
          cardsMap.get(nodes[i].nodeLocation).push(nodes[i]);
        }
      }

      if (this.navigationCiteria === 'location') {
        if (cardsMap.get(nodes[i].nodeType) == null) {
          const nodesInMap = [nodes[i]];
          cardsMap.set(nodes[i].nodeType, nodesInMap);
        } else {
          cardsMap.get(nodes[i].nodeType).push(nodes[i]);
        }
      }
    }
    console.log('cards map size: ' + cardsMap.size);

    const nodeCards = [];
    cardsMap.forEach( (value, key) => {
      const nodeCard = {'title' : key, 'nodes' : value};
      nodeCards.push(nodeCard);
    });
    console.log('cards array size: ' + nodeCards.length);

    return nodeCards;
  }

}
