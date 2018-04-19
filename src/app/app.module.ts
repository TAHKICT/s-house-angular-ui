import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserComponent} from './user/user.component';
import {MenuComponent} from './menu/menu.component';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
