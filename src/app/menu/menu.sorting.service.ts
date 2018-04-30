import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MenuSortingService{
  // Observable string sources
  private menuTypeClickCallSource = new Subject<any>();
  private menuTypesLoadedCallSource = new Subject<any>();

  // Observable string streams
  menuTypeClickCalled$ = this.menuTypeClickCallSource.asObservable();
  menuTypesLoadedCalled$ = this.menuTypesLoadedCallSource.asObservable();

  // Service message commands
  menuTypeClick() {this.menuTypeClickCallSource.next()}
  navigationCriteriasLoaded(){this.menuTypesLoadedCallSource.next()}

  constructor(private httpClient: HttpClient){}

  getSortingTypes() {
    console.log('getSortingTypes');
    return this.httpClient.get<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-sorting-types');
  }

}
