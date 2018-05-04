import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NodesService{
  // Observable string sources
  private nodeStateChangeCallSource = new Subject<any>();

  // Observable string streams
  nodeStateChangeCalled$ = this.nodeStateChangeCallSource.asObservable();

  nodeStateChange(nodeId, value){
    this.nodeStateChangeCallSource.next({nodeId:nodeId, value:value});
    // console.log('NodesService. nodeStateChange: ' + nodeId + ' | ' + value);
  }

  type;
  name;

  constructor(private httpClient: HttpClient){}

  getNodes(){
    return this.httpClient.post<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/content/get-nodes', {
      type: this.type,
      name: this.name,
      activeOnly: true
    });
  }

}
