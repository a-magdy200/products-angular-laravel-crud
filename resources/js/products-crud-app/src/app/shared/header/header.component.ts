import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private readonly routes: any[];
  constructor() {
    this.routes = [
      {name: 'All Products', link: '/products'},
      {name: 'Create Product', link: '/product/create'},
    ];
  }

  ngOnInit() {
  }

}
