import { Component } from '@angular/core';
import { FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter} from 'rxjs/operators';
import { GitHubService } from './github.service';


@Component({
  selector: 'app-observer',
  template: `
          <div class="container">
            <h2>Github Search RESTful API</h2>
            <input
              class="form-control"
              type="search"
              [formControl]="searchControl">

            <h3>Github Search Result</h3>
            <div *ngIf="isLoading">
              <i class="fa fa-spinner fa-spin fa-3x"></i>
            </div>
            <div *ngIf="users.length > 0">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-8 mb-4" *ngFor="let user of users" >
                  <div class="card h-100">
                    <a href="#"><img src="{{ user.avatar_url }}" class="mr-3" style="width: 100%" alt="..."> </a>
                    <div class="card-body">
                      <div class="card-title">
                        <h3><a href="{{ user.html_url }}">{{ user.login }}</a></h3>
                      </div>
                      <div class="card-text">
                        <h4>Score: {{ user.score }}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div *ngIf="users.length === 0">
              <p>Nothing to view</p>
            </div>
          </div>

  `,
  providers: [GitHubService]
})
export class ObserverComponent {
  searchControl = new FormControl();
  isLoading = false;
  users = [];
  constructor(private _githubService: GitHubService){
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())
      .subscribe(value => {
        this.isLoading = true;
        this._githubService.getGitHubData(value)
          .subscribe(data => {
            this.isLoading = false;
            this.users = data.items;
          });
      });
  }
}
