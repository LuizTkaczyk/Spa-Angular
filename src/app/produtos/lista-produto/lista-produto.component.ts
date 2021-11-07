import { ProdutoService } from './../produtos.service';
import { Produto } from './../produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',

})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos?: Produto[]

  //consumindo os dados do banco de dados fake
  ngOnInit(): void {
    this.produtoService.obterProdutos().subscribe(
      produtos => {
        this.produtos = produtos
        console.log(produtos)
      },
      error => console.log(error)
    )
  }

}
