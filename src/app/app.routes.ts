import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { Routes } from "@angular/router";

//configurando as rotas do projeto
export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },
    {
        path:'databinding',
        component: DataBindingComponent
    }

]