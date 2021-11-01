import { Tipo } from './tipo-servico.model';

export interface Agendamento {
  nome: string;
  nascimento: any;
  email: string;
  veiculoTipo: string;
  servicoTipo: Tipo;
  horario: any;
  pagamento: string;
  valor: string;
}
