import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva.model';
import { Usuario } from '../models/usuario.model';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservas: Reserva[];
  constructor() {
    this.reservas = [];
    this.mockReservas();
  }

  buscarTodas(): Reserva[] {
    return this.reservas;
  }

  buscarPorId(id): Reserva {
    return this.reservas.find(reserva => reserva.id === id);
  }

  adicionar(reserva: Reserva): Reserva {
    reserva.id = new Date().getTime();
    this.reservas.push(reserva);
    return reserva;
  }

  atualizar(reservaUpdate: Reserva): Reserva {
    this.reservas.forEach(reserva => {
      if (reserva.id === reservaUpdate.id) {
        reserva = reservaUpdate;
      }
    });
    return reservaUpdate;
  }

  excluir(id): void {
    const listaNova = this.reservas.filter(reserva => reserva.id !== id);
    this.reservas = listaNova;
  }

  mockReservas() {
    const usuario = new Usuario();
    usuario.id = new Date().getTime();
    usuario.nome = 'João';

    const veiculo = new Veiculo();
    veiculo.id = new Date().getTime();
    veiculo.cor = 'Preto';
    veiculo.placa = 'xkr3211';
    veiculo.tipo = 'carro';
    veiculo.modelo = 'corsa';

    const reserva = new Reserva();
    reserva.id = new Date().getTime();
    reserva.entrada = new Date();
    reserva.saida = new Date();
    reserva.usuario = usuario;
    reserva.status = 'FINALIZADA';
    reserva.veiculo = veiculo;

    reserva.vaga = {
      id: new Date().getTime(),
      codigo: '12D',
      status: 'LIVRE',
      tipo: 'NORMAL',
      quarteirao: {
        id: new Date().getTime(),
        rua: {
          id: new Date().getTime(),
          nome: 'euzebio de baros'
        },
        vagas: null,
        latitude: 234,
        longitude: 234
      }
    };

    this.reservas = [reserva];
  }
}
