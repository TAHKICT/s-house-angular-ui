import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NodesService} from '../node/nodes.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MenuService {
  // Observable string sources
  private menuItemClickCallSource = new Subject<any>();
  private menuItemsLoadedCallSource = new Subject<any>();

  // Observable string streams
  menuItemClickCalled$ = this.menuItemClickCallSource.asObservable();
  menuItemsLoadedCalled$ = this.menuItemsLoadedCallSource.asObservable();

  // Service message commands
  menuItemClick() {
    this.menuItemClickCallSource.next();
  }

  menuItemsLoaded() {
    console.log('menuItemsLoaded');
    this.menuItemsLoadedCallSource.next();
  }

  private navigationCriteria;
  constructor(private httpClient: HttpClient,
              private nodeService: NodesService) {}

  getMenuItems() {
    const params = new HttpParams().set('sortedBy', this.navigationCriteria);
    return this.httpClient.get<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-items',{
      params: params
    });
  }

  setNavigationCriteria (navigationCriteria){
    this.navigationCriteria = navigationCriteria;
    this.nodeService.navigationCiteria = navigationCriteria;
  }
}
