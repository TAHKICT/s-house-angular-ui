import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {MenuComponent} from './menu/menu.component';
import {HttpModule} from '@angular/http';
import {NodesComponent} from './nodes-page/nodes.component';
import {MenuSortingComponent} from './menu/menu.sorting.component';
import {MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuSortingService} from './menu/menu.sorting.service';
import {HttpClientModule} from '@angular/common/http';
import {SetupPageComponent} from './setup-page/setup-page.component';
import {RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

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
    NodesComponent,
    MainPageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MenuSortingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
