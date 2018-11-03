import { FormaPagamento } from './forma-pagamento.model';

export class Pagamento {
  id: number;
  data: Date;
  numero: string;
  tipo:string;
  formaPagamnto: FormaPagamento;
}
