import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NodesService{

  constructor(private http: Http,
              private httpClient: HttpClient){}

  getNodes(){
    // return this.http.get('http://localhost:8282/web-rest-api/user/admin-ui/content/get-nodes/light')
    //   .map(function (response) {
    //     console.log('getNodes');
    //     return response.json();
    //   });


    let getNodesRequest = {
      "type": "type",
      "name": "light",
      "activeOnly": true
    };


    return this.httpClient.post<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/content/get-nodes', getNodesRequest);

  }

}
