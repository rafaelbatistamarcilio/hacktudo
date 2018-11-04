import { VagasService } from './../shared/services/vagas.service';
import { Quarteirao } from './../shared/models/quateirao.model';
import { Component, OnInit } from '@angular/core';
import { Vaga } from '../shared/models/vaga.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vagas-disponiveis',
  templateUrl: './vagas-disponiveis.component.html',
  styleUrls: ['./vagas-disponiveis.component.css']
})
export class VagasDisponiveisComponent implements OnInit {

  quarteirao: Quarteirao;
  vagas: Vaga[];

  constructor(public router: Router,
    private route: ActivatedRoute,
    private vagasService: VagasService) {
    this.quarteirao = this.vagasService.recuperarQuarteiroesPorID();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idQuarteirao = Number(params.get('id'));
      this.quarteirao = this.vagasService.recuperarVagas().find(quarteirao => quarteirao.id === idQuarteirao);
      this.vagas = this.quarteirao.vagas;
    });
  }

  detalharvaga(id) {
    this.router.navigate(['vagas/' + id]);
  }
}
