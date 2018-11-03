import { Usuario } from './usuario.model';

export class Veiculo {
    id: number;
    placa: string;
    modelo: string;
    cor: string;
    dono: Usuario;
    tipo: string;
}
