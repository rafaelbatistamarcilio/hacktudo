import { Component, OnInit } from '@angular/core';
import { Quarteirao } from '../shared/models/quateirao.model';
import { VagasService } from '../shared/services/vagas.service';

@Component({
  selector: 'app-pesquisa-vagas',
  templateUrl: './pesquisa-vagas.component.html',
  styleUrls: ['./pesquisa-vagas.component.css']
})
export class PesquisaVagasComponent implements OnInit {

  quarteiroes: Quarteirao[];

  constructor(private vagasService: VagasService) {
    this.quarteiroes = [];
  }

  ngOnInit() {
    this.quarteiroes = this.vagasService.recuperarVagas();
  }

  public abrirVagas(idVaga) {
    console.log(idVaga);
  }

  getVagasLivres(quarteirao: Quarteirao): number {
    return quarteirao.vagas.filter(vaga => vaga.status === 'LIVRE').length;
  }

  getVagasCpdLivres(quarteirao: Quarteirao): number {
    return quarteirao.vagas.filter(vaga => vaga.status === 'CPD').length;
  }

  getVagasIdososLivres(quarteirao: Quarteirao): number {
    return quarteirao.vagas.filter(vaga => vaga.tipo === 'IDOSO').length;
  }

  capturarPosicaoUsuario() {

  }
}
