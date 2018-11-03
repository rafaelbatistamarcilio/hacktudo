import { Usuario } from './usuario.model';
import { Veiculo } from './veiculo.model';
import { Vaga } from './vaga.model';

export class Denuncia {
    id: number;
    descricao: string;
    placaInfrator: string;
    relator: Usuario;
    imagem: string;
    data: Date;
    vaga: Vaga;

    constructor() {
        this.data = new Date();
    }
}
