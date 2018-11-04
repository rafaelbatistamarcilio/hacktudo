import { VagasService } from './../shared/services/vagas.service';
import { Quarteirao } from './../shared/models/quateirao.model';
import { Component, OnInit } from '@angular/core';
import { Vaga } from '../shared/models/vaga.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vagas-disponiveis',
  templateUrl: './vagas-disponiveis.component.html',
  styleUrls: ['./vagas-disponiveis.component.css']
})
export class VagasDisponiveisComponent implements OnInit {

  quarteirao: Quarteirao;
  vagas: Vaga[];

  constructor(public router: Router, private vagasService: VagasService ) {
    this.quarteirao = this.vagasService.recuperarQuarteiroesPorID();
  }

  ngOnInit() {
    if (this.quarteirao !== undefined) {
      this.vagas = this.quarteirao.vagas;
    } else {
      this.vagas.push(
        {codigo: 'teste', id: 1, quarteirao: new Quarteirao(), status: '1', tipo: 'deficiencia'},
        {codigo: 'teste', id: 2, quarteirao: new Quarteirao(), status: '1', tipo: 'deficiencia'},
        {codigo: 'teste', id: 3, quarteirao: new Quarteirao(), status: '1', tipo: 'deficiencia'},
        {codigo: 'teste', id: 4, quarteirao: new Quarteirao(), status: '1', tipo: 'deficiencia'},
        {codigo: 'teste', id: 5, quarteirao: new Quarteirao(), status: '1', tipo: 'deficiencia'},
        {codigo: 'teste', id: 6, quarteirao: new Quarteirao(), status: '1', tipo: 'deficiencia'}
      );
    }

  }

  detalharvaga(id) {
    this.router.navigate(['vagas/' + id]);
  }

}
