import { Produto } from './produto.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'; //classe do http client para se comunicar com o bd, ATENÇÃO, PARA USAR O HttpClient É PRECISO IMPORTAR O 'HttpClientModule' no app.module.ts e adicionar a importação!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {

    //classe do http client para se comunicar com o bd
    constructor(private http: HttpClient) { }


    //porta do banco de dados fake, criando com o comando 'json-server --watch produtos.json'
    protected UrlService: string = "http://localhost:3000/"

    //metodo para obter os produtos do banco,
    obterProdutos():Observable <Produto[]> { //retorna um array de produtos (vinda de serviços) com o observable
        return this.http.get<Produto[]>(this.UrlService + "produtos")
    }
}