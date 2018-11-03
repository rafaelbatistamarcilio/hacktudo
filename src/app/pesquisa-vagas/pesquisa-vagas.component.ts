import { Component, OnInit } from '@angular/core';
import { Quarteirao } from '../shared/models/quateirao.model';
import { VagasService } from '../shared/services/vagas.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa-vagas',
  templateUrl: './pesquisa-vagas.component.html',
  styleUrls: ['./pesquisa-vagas.component.css']
})
export class PesquisaVagasComponent implements OnInit {

  posicaoUsuario: Position;
  quarteiroes: Quarteirao[];

  constructor(
    private vagasService: VagasService,
    private toastController: ToastController,
    private router: Router) {
    this.quarteiroes = [];
  }

  ngOnInit() {
    this.quarteiroes = this.vagasService.recuperarVagas();
    this.capturarPosicaoUsuario();
  }

  public abrirVagas(idQuarteirao) {
    this.router.navigate(['vagas/disponiveis/' + idQuarteirao]);
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

  async capturarPosicaoUsuario() {

    if ( window.navigator &&  window.navigator.geolocation ) {
      window.navigator.geolocation.getCurrentPosition(
        result => { this.posicaoUsuario = result; },
        async (error) => {
          this.posicaoUsuario = { coords: { latitude: -22.9993, longitude: -43.3675271 } } as any;
          await this.notificarErro();
        });
    }
  }

  async notificarErro() {
    const toast = await this.toastController.create({
      message: 'Erro ao recuperar posição do usuário',
      duration: 2000
    });
    toast.present();
  }

  auditar(idQuarteirao) {
    this.router.navigate(['vagas/auditoria/' + idQuarteirao]);
  }
}
