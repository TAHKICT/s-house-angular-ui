import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {MenuComponent} from './menu/menu.component';
import {HttpModule} from '@angular/http';
import {NodeComponent} from './node/nodes.component';
import {MenuSortingComponent} from './menu/menu.sorting.component';
import {MatCardModule, MatSelectModule, MatSlideToggleModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuSortingService} from './menu/menu.sorting.service';
import {HttpClientModule} from '@angular/common/http';
import {SetupPageComponent} from './setup-page/setup-page.component';
import {RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {MenuService} from './menu/menu.service';
import {NodesService} from './node/nodes.service';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';
import {NodesCardComponent} from './node/nodes-card/nodes-card.component';

export function socketProvider() {
  return new SockJS('http://localhost:8282/s-house-rest-api-web-websocket-registration');
}

const stompConfig: StompConfig = {
  url: socketProvider,
  headers: {},
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
  reconnect_delay: 5000,
  debug: true
};

const routes = [
  {path: '', component: MainPageComponent},
  {path: 'setup', component: SetupPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuSortingComponent,
    MenuComponent,
    NodeComponent,
    MainPageComponent,
    SetupPageComponent,
    NodesCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    MenuSortingService,
    MenuService,
    NodesService,
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
