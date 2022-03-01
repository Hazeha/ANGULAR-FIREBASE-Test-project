import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotfoundComponent } from './notfound.component';
import {ProductsComponent} from './products/product/products.component';
import {UserFormComponent} from './user-form/user-form.component';
import {UserComponent} from './user-form/user.component';
import {ObserverComponent} from './github/observer.component';

import {LoginComponent} from './login/login.component';
import {AuthGuard} from './login/auth-gaurd.service';
import { PreventUnsavedChangesGuard } from './login/prevent-unsaved-changes-gaurd.service';
import {SqlComponent} from './crud/sql/sql.component';
import {TutorialsListComponent} from './crud/sql/tutorials-list/tutorials-list.component';
import {AddTutorialComponent} from './crud/sql/add-tutorial/add-tutorial.component';
import {TutorialDetailsComponent} from './crud/sql/tutorial-details/tutorial-details.component';
import {FireComponent} from './crud/fire/fire.component';
import {FireUserComponent} from './crud/fire/fire-user/fire-user.component';
import {FireFormComponent} from './crud/fire/fire-form/fire-form.component';
import {canActivate} from '@angular/fire/auth-guard';
// import {CrudComponent} from './crud/crud.component';



export const routing = RouterModule.forRoot([
  { path: '', component: ProductsComponent },
  { path: 'Userform', component: UserFormComponent},
  { path: 'Login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},
  { path: 'Users', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'Githubber', component: ObserverComponent },
  { path: 'SQL', component: SqlComponent, children: [
       { path: 'tutorials', component: TutorialsListComponent },
       { path: 'tutorials/:id', component: TutorialDetailsComponent },
       { path: '', component: AddTutorialComponent }
  ]},
  { path: 'Fire', component: FireComponent, children: [
      { path: '', component: FireUserComponent },
      { path: 'fireForm', component: FireFormComponent },
      { path: 'fireForm/:id', component: FireFormComponent }
    ]},
  { path: '**', component: NotfoundComponent }
]);
