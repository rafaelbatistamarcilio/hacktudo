import { Component, OnInit } from '@angular/core';
import { Quarteirao } from '../shared/models/quateirao.model';
import { VagasService } from '../shared/services/vagas.service';
import { Vaga } from '../shared/models/vaga.model';

@Component({
  selector: 'app-auditoria-vagas',
  templateUrl: './auditoria-vagas.component.html',
  styleUrls: ['./auditoria-vagas.component.css']
})
export class AuditoriaVagasComponent implements OnInit {

  quarteitao: Quarteirao;

  constructor(private vagasService: VagasService) {
  }

  ngOnInit() {
    const quarteiroes = this.vagasService.recuperarVagas();

    /** @todo recuperar ID do quarteirão da rota */
    this.quarteitao = quarteiroes[0];
  }

  detalhar(id) {
    console.log(id);
  }
}

