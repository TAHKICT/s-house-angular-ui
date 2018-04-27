import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NodesService} from '../nodes-page/nodes.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MenuService{
  // Observable string sources
  private menuItemClickCallSource = new Subject<any>();

  // Observable string streams
  menuItemClickCalled$ = this.menuItemClickCallSource.asObservable();

  // Service message commands
  menuItemClick() {
    this.menuItemClickCallSource.next();
  }


  sortingCriteria;
  constructor(private httpClient: HttpClient,
              private nodeService: NodesService){}

  getMenuItems(){
    let params = new HttpParams().set('sortedBy',this.sortingCriteria);
    return this.httpClient.get<any[]>('http://localhost:8282/web-rest-api/user/admin-ui/menu/get-items',{
      params:params
    });
  }

  setSortingCriteria (sortingCriteria){
    this.sortingCriteria = sortingCriteria;
    this.nodeService.type = sortingCriteria;
  }
}
