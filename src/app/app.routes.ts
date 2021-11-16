import { NgModule } from '@angular/core';
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { Routes,RouterModule } from "@angular/router";


//configurando as rotas do projeto
export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },

    { path: 'sobre', component: SobreComponent },

    { path: 'contato', component: ContatoComponent },

    { path: 'databinding', component: DataBindingComponent },

    { path: 'produtos', component: ListaProdutoComponent },

    { path: 'produto-detalhe/:id', component: ListaProdutoComponent },

    { path: 'carrinho/:id', component: ListaProdutoComponent },

    { path: 'cadastro', component: CadastroComponent }


]

@NgModule({

    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{}