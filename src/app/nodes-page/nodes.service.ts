import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NodesService{
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
