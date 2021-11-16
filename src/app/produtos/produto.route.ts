import { NgModule } from '@angular/core';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { Routes, RouterModule } from '@angular/router';


const produtoRouterConfig: Routes = [
    {path:'', component: ListaProdutoComponent}
]

@NgModule({
    declarations:[
      
    ],
    imports:[ 
        RouterModule.forChild(produtoRouterConfig) //forChild, pois é um componente filho
     ],
    exports:[
        RouterModule
    ]

})

export class ProdutoRoutingModule{}