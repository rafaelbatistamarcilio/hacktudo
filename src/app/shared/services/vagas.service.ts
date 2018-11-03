import { Injectable } from '@angular/core';
import { Quarteirao } from '../models/quateirao.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  constructor() { }

  recuperarVagas(): Quarteirao[] {
    return [
      {
        id: 1,
        latitude: -22.999842,
        longitude: -43.3702498,
        rua: {
          id: 1,
          nome: 'Euzébio'
        },
        vagas: [{
          id: 1,
          codigo: '1E',
          status: 'LIVRE'
        }, {
          id: 2,
          codigo: '1D',
          status: 'LIVRE'
        }, {
          id: 3,
          codigo: '2D',
          status: 'OCUPADA'
        }]
      },
      {
        id: 2,
        latitude: -22.9977835,
        longitude: -43.3674991,
        rua: {
          id: 1,
          nome: 'Euzébio'
        },
        vagas: [{
          id: 4,
          codigo: '1E',
          status: 'LIVRE'
        }, {
          id: 5,
          codigo: '1D',
          status: 'LIVRE'
        }, {
          id: 6,
          codigo: '2D',
          status: 'OCUPADA'
        }]
      }
    ];
  }
}