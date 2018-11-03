import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-vagas',
  templateUrl: './pesquisa-vagas.component.html',
  styleUrls: ['./pesquisa-vagas.component.css']
})
export class PesquisaVagasComponent implements OnInit {

  latitude = -23.000997;
  longitude = -43.3671755;
  
  constructor() { }

  ngOnInit() {
  }

}
