import { ProdutoService } from './produtos/produtos.service';
import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
//imports para as rotas
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';


import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

//IMPORT DA FORMATAÇÃO DA MOEDA BRASILEIRA
import ptBr from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';

registerLocaleData(ptBr) // para usar o padrão de moeda brasileiro

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)],//'routes' VEM DA CONSTANTE CRIADA EM app.routes.ts
    FormsModule,
    ReactiveFormsModule,//IMPORTAÇÃO PARA TRABALHAR COM FORMULARIOS
    HttpClientModule
  ],
  providers: [
    ProdutoService, //importando o produto service
    {provide:LOCALE_ID, useValue:'pt'}//para usar o padrão de moeda brasileiro
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
