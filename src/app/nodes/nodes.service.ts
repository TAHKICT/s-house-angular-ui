import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class NodesService{

  constructor(private http: Http){}

  getNodes(){
    return this.http.get('http://localhost:8282/web-rest-api/user/admin-ui/content/get-nodes/light')
      .map(function (response) {
        return response.json();
      });
  }

}
