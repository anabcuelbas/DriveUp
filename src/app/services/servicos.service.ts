import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Agendamento } from '../models/agendamento.model';
import { Cadastro } from '../models/cadastro.model';
import { Estabelecimento } from '../models/estabelecimento.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
	providedIn: 'root',
})
export class ServicosService {
	constructor(private http: HttpClient) {}

	public imagensServicos = ['https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Fernando+Garcia/29-06+-+Como+lavar+o+carro+em+casa/Como+lavar+o+carro+em+casa4.jpg', 'https://i2.wp.com/www.tempario.com.br/wp-content/uploads/2019/06/ferramentas-para-oficina-mec%C3%A2nica-1-1.jpg?zoom=1.25&w=610', 'https://s2.glbimg.com/1lRKsKreVqffH30u4DskyG7_HuY=/0x0:2000x1333/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2018/08/01/venda-carros-novos_2018-07-13_q98a7885_fabio_tito-g1.jpg', 'https://doutormultas.com.br/wp-content/uploads/2017/10/como-pintar-um-carro-alteracao-de-cor.webp', 'https://mobilidade.estadao.com.br/wp-content/uploads/2020/12/Aluguel-de-carrosFrota-Localiza4.jpg'];

	public imagensLocais = 'https://www.hightorque.com.br/wp-content/uploads/2016/08/oficina_high_torque_sao_jose_dos_campos_sjc_fachada-1099x625.jpg';

	public getAllEstabelecimentos(): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/estabelecimentos`);
	}
	public getEstabelecimentoByServicoID(id: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/oferta-servicos/${id}`);
	}
	public getHorarioByEstabelecimentoID(estabId: string, servId: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/horarios/${estabId}/${servId}`);
	}

	public getServicoByID(id: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/servico/${id}`);
	}
	public listServices(): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/servicos`);
	}
	public getSubtipoByServicoAndEstabelecimentoID(servicoId: string, estabelecimentoId: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/sub-servicos/${servicoId}/${estabelecimentoId}`);
	}
	public getPrecoByVeiculoAndSubServicoID(subTipoId: string, veiculo: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/preco/${subTipoId}/${veiculo}`);
	}

	public getReservas(): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/reservas`);
	}
	public addReservas(reserva: Agendamento): Observable<any> {
		return this.http.post<any>(`${environment.apiUrl}/reserva`, reserva);
	}

	public verifyLogin(tipo: string, email: string, senha: string): Observable<Usuario | Estabelecimento> {
		return this.http.get<Usuario | Estabelecimento>(`${environment.apiUrl}/verificar-login/${tipo}/${email}/${senha}`);
	}
	public cadastrarNovoUsuario(user: Cadastro): Observable<any> {
		return this.http.post<any>(`${environment.apiUrl}/cadastrar`, user);
	}
	public updateUser(user: Usuario): Observable<any> {
		return this.http.post<Usuario>(`${environment.apiUrl}/atualizar-usuario`, user);
	}
	public updateEstabelecimento(estabelecimento: Estabelecimento): Observable<any> {
		return this.http.post<any>(`${environment.apiUrl}/atualizar-estabelecimento`, estabelecimento);
	}
}
