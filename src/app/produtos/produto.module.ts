import { ProdutoRoutingModule } from './produto.route';
import { CommonModule } from '@angular/common';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        ListaProdutoComponent
    ],
    imports:[
        CommonModule,
        ProdutoRoutingModule //IMPORT DO MODULO DE ROTEAMENTO CRIADO 'produto.route.ts'
    ],
    exports:[]
})

export class ProdutoModule{}