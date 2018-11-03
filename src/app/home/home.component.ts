import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'RBM Progressive Web App';

  constructor() { }

  ngOnInit() {
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  openMenu() {
    console.log('CLICOU NO MENU');
  }
}
