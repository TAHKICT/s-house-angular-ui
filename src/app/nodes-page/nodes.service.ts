import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NodesService{

  constructor(private httpClient: HttpClient){}

  getNodes(type, name){
    return this.httpClient.post<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/content/get-nodes', {
      type: type,
      name: name,
      activeOnly: true
    });

  }

}
