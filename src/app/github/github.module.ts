// Angular Dependencies
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

// Services
import {GitHubService} from './github.service';

// Components
import {ObserverComponent} from './observer.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    ObserverComponent
  ],
  providers: [
    GitHubService
  ],
  exports: [
  ],
})
export class GithubModule{
}


