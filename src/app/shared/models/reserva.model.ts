import { Usuario } from './usuario.model';
import { Veiculo } from './veiculo.model';
import { Pagamento } from './pagamento.model';

export class Reserva {
  id: number;
  usuario: Usuario;
  veiculo: Veiculo;
  entrada: Date;
  saida: Date;
  status: string;
  pagamento: Pagamento;
}
