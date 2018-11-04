import { FormaPagamento } from './../shared/models/forma-pagamento.model';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reserva } from '../shared/models/reserva.model';
import { Usuario } from '../shared/models/usuario.model';
import { Veiculo } from '../shared/models/veiculo.model';
import { Pagamento } from '../shared/models/pagamento.model';
import { ReservaService } from '../shared/services/reserva.service';

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

  hasID = true;

  usuarioLogado: Usuario;
  veiculoUtilizado: Veiculo;
  previsaoSaida: Date;

  constructor(private reservaService: ReservaService) {
    this.preencherFormulario(new Reserva());
  }

  ngOnInit() {
    /** @todo quando houver autnticação, buscar usuario do token de autenticação salvo no local storage*/
    this.usuarioLogado = new Usuario();
    this.usuarioLogado.id = 1;

    /** @todo caso o usuário logado possua mais de 1 veículo, perguntar qual estáusando*/
    this.veiculoUtilizado = new Veiculo();
    this.veiculoUtilizado.id = 1;

    /** @todo se tiver id no path buscar reserva */
    this.preencherFormulario(new Reserva());
  }

  preencherFormulario(reserva: Reserva) {
    this.dataAtual = new Date();
    this.reservaForm = new FormBuilder().group({
      entrada: [this.dataAtual, Validators.required],
      saida: [reserva.saida, Validators.required],
      veiculo: [this.veiculoUtilizado, Validators.required],
      usuario: [this.usuarioLogado, Validators.required],
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

  salvar() {
    console.log(this.reservaForm.getRawValue());
    const dadosFormulario = this.reservaForm.getRawValue();
    this.reservaService.adicionar(dadosFormulario);
  }
}
