import { Component, OnInit } from '@angular/core';
import { Quarteirao } from '../shared/models/quateirao.model';
import { VagasService } from '../shared/services/vagas.service';
import { ToastController } from '@ionic/angular';

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
    private toastController: ToastController) {
    this.quarteiroes = [];
    // this.posicaoUsuario = {
    //   timestamp: 0,
    //   coords: {
    //     latitude: -22.908229, longitude: -43.1796637, accuracy: 0, altitude: 0, altitudeAccuracy: 0, heading: 0, speed: 0
    //   }
    // };
  }

  ngOnInit() {
    this.quarteiroes = this.vagasService.recuperarVagas();
    this.capturarPosicaoUsuario();
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

  async capturarPosicaoUsuario() {

    window.navigator.geolocation.getCurrentPosition(
      result => { this.posicaoUsuario = result; console.log(result); },
      async error => {
        const toast = await this.toastController.create({
          message: 'Erro ao recuperar posição do usuário',
          duration: 2000
        });
        toast.present();
      });
  }
}
