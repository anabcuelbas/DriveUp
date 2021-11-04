import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Agendamento } from '../models/agendamento.model';
import { Estabelecimento } from '../models/estabelecimento.model';
import { Servico } from '../models/servico.model';

@Injectable({
	providedIn: 'root',
})
export class ServicosService {
	constructor(private http: HttpClient) {}

	public resp: Servico;
	public resp2: Estabelecimento;
	public servicos = [
		{
			id: '0',
			nome: 'Lavagem',
			descricao: 'Trabalhamos com lavagem completa ou parcial de automóveis!',
			img: 'https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Fernando+Garcia/29-06+-+Como+lavar+o+carro+em+casa/Como+lavar+o+carro+em+casa4.jpg',
			estabelecimentos: [
				{
					id: '00',
					nome: 'Posto do Zé',
					precos: ['Completa: R$50.00', 'Parcial: R$120.00'],
					horario_funcionamento: 'Segunda à Sábado, 8h às 20h',
					horario_disponivel: ['Sexta às 15h', 'Sexta às 18h'],
					localizacao: 'Vila das Hortências, Avenida Napoleão Peixoto, 456',
				},
				{
					id: '01',
					nome: 'Posto da Vit',
					precos: ['Completa: R$50.00', 'Parcial: R$120.00'],
					horario_funcionamento: 'Quarta à Sábado, 8h às 23h',
					horario_disponivel: ['Sexta às 15h', 'Sexta às 18h'],
					localizacao: 'Bairro Taquaral, Rua Inês de Castro, 558',
				},
			],
			tipo: [
				{
					id: '001',
					nome: 'Lavagem completa',
					valor: 'R$150,00',
				},
				{
					id: '002',
					nome: 'Higienizaç±ao interna',
					valor: 'R$50,00',
				},
				{
					id: '003',
					nome: 'Limpeza do ar-condicionado',
					valor: 'R$150,00',
				},
			],
		},
		{
			id: '1',
			nome: 'Mecânico',
			descricao: 'Trabalhamos com concerto de automóveis!',
			img: 'https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Fernando+Garcia/29-06+-+Como+lavar+o+carro+em+casa/Como+lavar+o+carro+em+casa4.jpg',
			estabelecimentos: [
				{
					id: '02',
					nome: 'Mecânico do Zé',
					precos: ['Concerto total: R$150.00', 'Reparos: R$100.00'],
					horario_funcionamento: 'Segunda à Sábado, 8h às 20h',
					horario_disponivel: ['Sexta às 15h', 'Sexta às 18h'],
					localizacao: 'Bairro da Vitória, Avenida Pata Amada, 222',
				},
				{
					id: '03',
					nome: 'Mecânico da Vit',
					precos: ['Concerto total: R$250.00', 'Reparos: R$50.00'],
					horario_funcionamento: 'Quarta à Sábado, 8h às 23h',
					horario_disponivel: ['Sexta às 15h', 'Sexta às 18h'],
					localizacao: 'Vila das Anas, Avenida ABC, 123',
				},
			],
			tipo: [
				{
					id: '004',
					nome: 'Reparação completa',
					valor: 'R$150,00',
				},
				{
					id: '005',
					nome: 'Troca de oleo',
					valor: 'R$50,00',
				},
			],
		},
		{
			id: '2',
			nome: 'Revisão',
			descricao: 'Trabalhamos com revisão completa de automóveis!',
			img: 'https://exame.com/wp-content/uploads/2020/06/concessionaria-veiculos-1.jpg',
			estabelecimentos: [
				{
					id: '04',
					nome: 'Honda',
					precos: ['Revisão de 1 ano: R$2550.00', 'Revisão de 3 anos: R$3000.00'],
					horario_funcionamento: 'Segunda à Sábado, 8h às 20h',
					horario_disponivel: ['Sexta às 15h', 'Sexta às 18h'],
					localizacao: 'Vila das Giovanas, Avenida Armário, 148',
				},
				{
					id: '05',
					nome: 'Hyundai',
					precos: ['Revisão de 1 ano: R$2550.00', 'Revisão de 3 anos: R$3000.00'],
					horario_funcionamento: 'Quarta à Sábado, 8h às 23h',
					horario_disponivel: ['Sexta às 15h', 'Sexta às 18h'],
					localizacao: 'Vila das Laoras, Avenida Top Demais, 1097',
				},
			],
			tipo: [
				{
					id: '006',
					nome: 'Revisão completa',
					valor: 'R$150,00',
				},
			],
		},
	];

	public listServices(): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/servicos`);
	}

	public getEstabelecimentoByServicoID(id: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/oferta-servicos/${id}`);
	}

	public getSubtipoByServicoAndEstabelecimentoID(servicoId: string, estabelecimentoId: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/sub-servicos/${servicoId}/${estabelecimentoId}`);
	}

	public getHorarioByServicoAndEstabelecimentoID(servicoId: string, estabelecimentoId: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/horarios/${estabelecimentoId}/${servicoId}`);
	}

	public getPrecoByVeiculoAndSubServicoID(subTipoId: string, veiculo: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/preco/${subTipoId}/${veiculo}`);
	}

	public getHorarioByEstabelecimentoID(estabId: string, servId: string): Observable<any> {
		return this.http.get<any>(`${environment.apiUrl}/horarios/${estabId}/${servId}`);
	}

	public addReservas(reserva: Agendamento): Observable<any> {
		return this.http.post<any>(`${environment.apiUrl}/reserva`, reserva);
	}
}