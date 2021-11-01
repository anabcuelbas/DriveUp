import { Estabelecimento } from './estabelecimento.model';
import { Tipo } from './tipo-servico.model';

export interface Servico {
  id: string;
  nome: string;
  descricao: string;
  estabelecimentos: Estabelecimento[];
  img: string;
  tipo: Tipo[];
}
