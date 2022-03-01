import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fire',
  template: `
    <nav class="navbar navbar-expand">
      <p class="navbar-brand">FireStore</p>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a routerLink="" class="nav-link">Search</a>
        </li>
        <li class="nav-item">
          <a routerLink="fireForm" class="nav-link">Add</a>
        </li>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `
})
export class FireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} {
}
