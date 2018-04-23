import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuSortingService{

  constructor(private http: Http){}

  getMenuSortingTypes(){
    return this.http.get('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-sorting-types')
      .map(function (response) {
        console.log('getMenuSortingTypes');
        return response.json();
      });
  }

}
