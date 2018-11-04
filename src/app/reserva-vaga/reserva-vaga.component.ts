import { VagasService } from './../shared/services/vagas.service';
import { UsuariosService } from './../shared/services/usuarios.service';
import { FormaPagamento } from './../shared/models/forma-pagamento.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reserva } from '../shared/models/reserva.model';
import { Usuario } from '../shared/models/usuario.model';
import { Veiculo } from '../shared/models/veiculo.model';
import { Pagamento } from '../shared/models/pagamento.model';
import { ReservaService } from '../shared/services/reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from '../shared/models/vaga.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reserva-vaga',
  templateUrl: './reserva-vaga.component.html',
  styleUrls: ['./reserva-vaga.component.css']
})
export class ReservaVagaComponent implements OnInit {
  dataAtual: Date;
  horaReserva;
  reserva: Reserva;
  reservaForm: FormGroup;
  vagaDisponivel = false;
  vaga: Vaga;

  hasID = false;

  usuarioLogado: Usuario;
  veiculoUtilizado: Veiculo;
  previsaoSaida: Date;

  constructor(
    private reservaService: ReservaService,
    private usuariosService: UsuariosService,
    private vagasService: VagasService,
    private route: ActivatedRoute,
    private toast: ToastController,
    private router: Router
    ) {
      this.vaga = new Vaga();
    this.preencherFormulario(new Reserva());
  }

  ngOnInit() {

    this.usuarioLogado = this.usuariosService.getUsuarioLogado();
    /** @todo caso o usuário logado possua mais de 1 veículo, perguntar qual estáusando*/
    this.veiculoUtilizado = new Veiculo();
    this.veiculoUtilizado.id = 1;
    this.veiculoUtilizado.modelo = 'corsa';
    this.veiculoUtilizado.cor = 'azul';
    this.veiculoUtilizado.placa = 'xpt34';

    /** @todo se tiver id no path buscar reserva */

    this.reserva = new Reserva();
    this.route.paramMap.subscribe(params => {
      this.vaga = this.vagasService.recuperarVagas()[0].vagas[0];
      this.reserva.vaga = this.vaga;
      this.vagaDisponivel = this.vaga.status === 'LIVRE';
      this.preencherFormulario(this.reserva);
    });

  }

  preencherFormulario(reserva: Reserva) {
    this.dataAtual = new Date();
    this.reservaForm = new FormBuilder().group({
      entrada: [this.dataAtual, Validators.required],
      saida: [reserva.saida, Validators.required],
      veiculo: [this.veiculoUtilizado, Validators.required],
      usuario: [this.usuarioLogado, Validators.required],
      vaga: [this.vaga],
      pagamento: [new Pagamento(), Validators.required]
    });
  }

  alterarPrevisao(previsaoEmHoras: number) {
    if (this.reservaForm) {
      const entrada = this.reservaForm.get('entrada').value as Date;
      this.previsaoSaida = new Date( (entrada.getTime() + previsaoEmHoras * 60 * 60 * 1000) );
      this.reservaForm.get('saida').setValue( this.previsaoSaida );
    }
  }

  alterarPagamento(forma) {
    const pagamento = this.reservaForm.get('pagamento').value;
    const formaPagamento = new FormaPagamento();
    formaPagamento.id = 1;
    formaPagamento.tipo = forma;
    pagamento.formaPagamnto = formaPagamento;
    this.reservaForm.get('pagamento').setValue(pagamento);
  }

  toggleEditar() {
    this.hasID = !this.hasID;
    // console.log('click' + this.hasID.valueOf);
  }

  async salvar() {
    console.log(this.reservaForm.getRawValue());
    const dadosFormulario = this.reservaForm.getRawValue();
    this.reservaService.adicionar(dadosFormulario);
    const toastObj = await this.toast.create({
      duration: 4000,
      message: 'Reserva realizada com sucesso',
      position: 'bottom'
    });

    toastObj.present();
    this.router.navigate(['reservas/lista']);
  }
}
