import { Vaga } from './vaga.model';
import { Rua } from './rua.model';

export class Quarteirao {
    id: number;
    latitude: number;
    longitude: number;
    rua: Rua;
    vagas: Vaga[];
}
