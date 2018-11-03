import { Injectable } from '@angular/core';
import { Denuncia } from '../models/denuncia.model';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor() { }

  recuperarDenuncias(): Denuncia[] {
    return [
      {
        id: 1,
        descricao: 'veiculo ocupando vaga registrada como livre',
        imagem: 'asdasdsad',
        infrator: {
          id: 1,
          nome: 'Paulo',
          veiculos: null
        },
        relator: {
          id: 1,
          nome: 'Ricardo',
          veiculos: null
        },
        veiculo: {
          id: 1,
          modelo: 'Palio',
          cor: 'verde',
          placa: 'XTZ6621',
          tipo: 'carro',
          dono: null
        },
        data: new Date()
      },
      {
        id: 2,
        descricao: 'veiculo ocupando vaga registrada como livre',
        imagem: 'asdasdsad',
        infrator: {
          id: 3,
          nome: 'Luis',
          veiculos: null
        },
        relator: {
          id: 4,
          nome: 'Pedro',
          veiculos: null
        },
        veiculo: {
          id: 56,
          modelo: 'Siena',
          cor: 'preto',
          placa: 'KTZ9934',
          tipo: 'carro',
          dono: null
        },
        data: new Date()
      },
      {
        id: 3,
        descricao: 'veiculo ocupando vaga registrada como livre',
        imagem: 'asdasdsad',
        infrator: {
          id: 6,
          nome: 'Guilherme',
          veiculos: null
        },
        relator: {
          id: 9,
          nome: 'lauro',
          veiculos: null
        },
        veiculo: {
          id: 23,
          modelo: 'XR Tornado',
          cor: 'amarelo',
          placa: 'BTF7766',
          tipo: 'moto',
          dono: null
        },
        data: new Date()
      }
    ];
  }

  recuperarPorId(id) {
    return this.recuperarDenuncias().find(denuncia => denuncia.id === id);
  }
}
