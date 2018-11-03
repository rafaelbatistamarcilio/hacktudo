import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMenu: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(route) {
    this.router.navigate([route]);
    this.showMenu = false;
  }
}
