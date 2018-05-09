import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MenuSortingService {
  // Observable string sources
  private navigationCriteriaClickCallSource = new Subject<any>();
  private navigationCriteriasLoadedCallSource = new Subject<any>();

  // Observable string streams
  navigationCriteriaClickCalled$ = this.navigationCriteriaClickCallSource.asObservable();
  navigationCriteriasLoadedCalled$ = this.navigationCriteriasLoadedCallSource.asObservable();

  // Service message commands
  menuTypeClick() {this.navigationCriteriaClickCallSource.next()}
  navigationCriteriasLoaded(){this.navigationCriteriasLoadedCallSource.next()}

  constructor(private httpClient: HttpClient) {}

  getSortingTypes() {
    console.log('getSortingTypes');
    return this.httpClient.get<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-sorting-types');
  }

}
