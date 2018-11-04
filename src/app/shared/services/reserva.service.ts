import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservas: Reserva[];
  constructor() { }

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
}
