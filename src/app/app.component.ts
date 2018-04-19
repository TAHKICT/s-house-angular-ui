import { Component } from '@angular/core';
import {MenuService} from './menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MenuService]
})
export class AppComponent {
  menuItems = []

  constructor (private menuService: MenuService) {}

  ngOnInit(){
    // this.menuItems = this.menuService.items;
    this.menuService.getMenuItems().subscribe( items =>{
      console.log(items)
      this.menuItems = items
    })
    // this.menuItems = this.menuService.getMenuItems();
  }
}
