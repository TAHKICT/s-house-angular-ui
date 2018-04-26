import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MenuSortingService{

  constructor(private httpClient: HttpClient){}

  loadSortingTypes() {
    return this.httpClient.get<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-sorting-types');
  }

}
