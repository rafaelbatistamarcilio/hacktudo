import { Usuario } from './usuario.model';
import { Veiculo } from './veiculo.model';
import { Vaga } from './vaga.model';

export class Denuncia {
    id: number;
    descricao: string;
    infrator: Usuario;
    relator: Usuario;
    veiculo: Veiculo;
    imagem: string;
    data: Date;
    vaga: Vaga;
}
