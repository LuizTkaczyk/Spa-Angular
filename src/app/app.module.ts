import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProdutoService } from './produtos/produtos.service';
import { NgModule, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


// IMPORTS TRANSFERIDOS PARA O MODULO DE NAVEGAÇÃO EM 'navegacao'
// import { MenuComponent } from './navegacao/menu/menu.component';
// import { HomeComponent } from './navegacao/home/home.component';
// import { FooterComponent } from './navegacao/footer/footer.component';


import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
//imports para as rotas
import { RouterModule } from '@angular/router';
import { routes, AppRoutingModule } from './app.routes';


import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

//IMPORT DA FORMATAÇÃO DA MOEDA BRASILEIRA
import ptBr from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';

import { NgBrazil, TextMask } from 'ng-brazil' //versão 2.0.9!!!!!!!!!!!!!!!!!!!!
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';


registerLocaleData(ptBr) // para usar o padrão de moeda brasileiro

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    //ListaProdutoComponent, //ESTÁ VINDO DE produto.module em /produtos
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    HttpClientModule,
    ReactiveFormsModule, //MÓDULO PARA A CRIAÇÃO DE FORMULARIOS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    NavegacaoModule, // o modulo de navegação traz o modulo personalizado com o Home, o footer e o menu
    AppRoutingModule // Modulo de rotas, vindo de app.routes.ts
  ],
  providers: [
    ProdutoService, //importando o produto service
    {provide:LOCALE_ID, useValue:'pt'}//para usar o padrão de moeda brasileiro
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
