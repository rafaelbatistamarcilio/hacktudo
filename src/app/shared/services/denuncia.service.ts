import { Injectable } from '@angular/core';
import { Denuncia } from '../models/denuncia.model';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  denuncias: Denuncia[];

  constructor() {
    this.mockDenuncias();
  }

  recuperarDenuncias(): Denuncia[] {
    return this.denuncias;
  }

  recuperarPorId(id) {
    return this.recuperarDenuncias().find(denuncia => denuncia.id === id);
  }

  salvar(denuncia: Denuncia): Denuncia {
    denuncia.id = new Date().getTime();
    this.denuncias.push(denuncia);
    return denuncia;
  }

  atualizar(update: Denuncia): Denuncia {
    this.denuncias.forEach(denuncia => {
      if (denuncia.id === update.id) {
        denuncia = update;
      }
    });
    return update;
  }

  excluir(id): void {
    const listaNova = this.denuncias.filter(obj => obj.id !== id);
    this.denuncias = listaNova;
  }

  mockDenuncias() {
    this.denuncias = [
      {
        id: 1,
        descricao: 'veiculo ocupando vaga registrada como livre',
        imagem: 'https://image.flaticon.com/icons/svg/23/23765.svg',
        placaInfrator: 'XTC98734',
        relator: {
          id: 1,
          nome: 'Ricardo',
          documento: '12365213',
          veiculos: null
        },
        data: new Date(),
        vaga: {
          id: 1,
          codigo: 'V23C',
          status: 'LIVRE',
          tipo: 'IDOSO',
          quarteirao: {
            id: 1,
            latitude: -22.909716,
            longitude: -43.2088947,
            rua: {
              id: 1,
              nome: 'Rua das américas'
            },
            vagas: null
          }
        }
      },
      {
        id: 2,
        placaInfrator: 'XTC98734',
        descricao: 'veiculo ocupando vaga registrada como livre',
        imagem: 'https://image.flaticon.com/icons/svg/23/23765.svg',
        relator: {
          id: 4,
          nome: 'Pedro',
          documento: '12365213',
          veiculos: null
        },
        data: new Date(),
        vaga: {
          id: 1,
          codigo: 'V567C',
          status: 'LIVRE',
          tipo: 'NORMAL',
          quarteirao: {
            id: 2,
            latitude: -22.910408,
            longitude: -43.2064167,
            rua: {
              id: 1,
              nome: 'Rua  do coala'
            },
            vagas: null
          }
        }
      },
      {
        id: 3,
        descricao: 'veiculo ocupando vaga registrada como livre',
        placaInfrator: 'XTC98734',
        imagem: 'https://image.flaticon.com/icons/svg/23/23765.svg',
        relator: {
          id: 9,
          nome: 'lauro',
          documento: '12365213',
          veiculos: null
        },
        data: new Date(),
        vaga: {
          id: 1,
          codigo: 'V223C',
          status: 'LIVRE',
          tipo: 'CPD',
          quarteirao: {
            id: 2,
            latitude: -22.910695,
            longitude: -43.2060407,
            rua: {
              id: 1,
              nome: 'Rua das chichilas'
            },
            vagas: null
          }
        }
      }
    ];
  }
}
