import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {MenuService} from './menu.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MenuSortingService{
  menuSortingTypes = [];

  constructor(private httpClient: HttpClient,
              private menuService: MenuService){}

  loadSortingTypes(){
    console.log('loadSortingTypes');

    this.httpClient.get<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-sorting-types').subscribe(types => this.menuSortingTypes = types);

    console.log('size:' + this.menuSortingTypes.length);
  }

  setSortingCriteria(sortingCriteria){
    this.menuService.setSortingCriteria(sortingCriteria);
  }

}
