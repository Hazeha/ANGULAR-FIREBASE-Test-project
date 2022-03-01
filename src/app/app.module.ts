// Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Standard Pages
import { HomeComponent } from './home.component';
import { NotfoundComponent } from './notfound.component';

// Modules
import { LayoutModule } from './layout/layout.module';
import { LoginModule } from './login/login.module';
import { ProductsModule } from './products/products.module';
import { GithubModule } from './github/github.module';

// UN sorted
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent} from './user-form/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//SQL
import { SqlComponent } from './crud/sql/sql.component';
import { AddTutorialComponent } from './crud/sql/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './crud/sql/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './crud/sql/tutorials-list/tutorials-list.component';

import { FireComponent} from './crud/fire/fire.component';
import { FireUserComponent} from './crud/fire/fire-user/fire-user.component';
import { FireFormComponent} from './crud/fire/fire-form/fire-form.component';
import {auth} from 'firebase';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserComponent,

    HomeComponent,
    NotfoundComponent,
    SqlComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,

    FireComponent,
    FireUserComponent,
    FireFormComponent
  ],
  imports: [
    LayoutModule,
    LoginModule,
    ProductsModule,
    GithubModule,

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
