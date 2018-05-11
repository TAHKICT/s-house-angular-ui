import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import {NgModule} from '@angular/core';
import {RootPageComponent} from './root-page.component';


@NgModule({
  declarations: [RootPageComponent],
  imports: [
  RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
  NbLayoutModule,
  NbSidebarModule,
],
  providers: [NbSidebarService], // we need this service for the sidebar
  exports: [RootPageComponent]
})
export class RootPageModule { }
