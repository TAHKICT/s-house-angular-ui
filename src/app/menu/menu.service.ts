import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class MenuService{

  sortingCriteria = 'type';

  constructor(private httpClient: HttpClient){}

  getMenuItems(){
    let params = new HttpParams().set('sortedBy',this.sortingCriteria);
    console.log('getMenuItems');
    return this.httpClient.get<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-items',{
      params:params
    });
  }

  setSortingCriteria (sortingCriteria){
    this.sortingCriteria = sortingCriteria;
  }
}
