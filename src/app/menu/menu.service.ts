import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService{

  constructor(private http: Http){}

  getMenuItems(){
    return this.http.get('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-items?sortedBy=type')
      .map(function (response) {
        console.log('getMenuItems');
         return response.json();
      });
  }
}
