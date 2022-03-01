import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { environment } from '../../../environments/environment';
import { FireComponent} from './fire.component';
import { FireUserComponent } from './fire-user/fire-user.component';
import { FireFormComponent } from './fire-form/fire-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 1. Import the fire
import { AngularFireModule } from '@angular/fire';


// 2. Set the fire
const config = {
  apiKey: 'AIzaSyBcf5RVw7eY8fs_vdaC9rrvvPKwHWPjndE',
  authDomain: 'vac-proj.firebaseapp.com',
  databaseURL: 'https://vac-proj.firebaseio.com',
  projectId: 'vac-proj',
  storageBucket: 'vac-proj.appspot.com',
  messagingSenderId: '544535771080',
  appId: '1:544535771080:web:17c07bee2587d1616772fd',
  measurementId: 'G-DQZ9GTY2M0'
};
@NgModule({
  declarations: [
    FireComponent,
    FireUserComponent,
    FireFormComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FireModule { }

