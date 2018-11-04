import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Veiculo } from '../models/veiculo.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getUsuarioLogado(): Usuario {

    const usuario = new Usuario();
    usuario.id = new Date().getTime();
    usuario.nome = 'João';

    const veiculo = new Veiculo();
    veiculo.id = new Date().getTime();
    veiculo.cor = 'Preto';
    veiculo.placa = 'xkr3211';
    veiculo.tipo = 'carro';
    veiculo.modelo = 'corsa';

    usuario.veiculos = [ veiculo ];
    return usuario;
  }
}
