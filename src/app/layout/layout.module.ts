import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './navigation/navigation.component';
import {routing} from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NavigationComponent
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
  ]
})
export class LayoutModule{
}
