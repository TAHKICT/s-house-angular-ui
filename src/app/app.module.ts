import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {MenuComponent} from './menu/menu.component';
import {HttpModule} from '@angular/http';
import {NodesComponent} from './nodes/nodes.component';
import {MenuSortingComponent} from './menu/menu.sorting.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuSortingComponent,
    MenuComponent,
    NodesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
