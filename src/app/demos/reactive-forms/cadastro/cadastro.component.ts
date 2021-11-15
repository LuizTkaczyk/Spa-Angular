import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //em caso de erros na declação , alterar para false o stric, no tsconfig.
  cadastroForm: FormGroup;
  //importando da classe usuario
  usuario: Usuario

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //criando um grupo de formulario com o formBuilder(recomendado) usando arrays
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    })

  }

  adicionarUsuario() {
    //capturando o os dados do formulario e guardando em uma variavel
    //let x = this.cadastroForm.value


    //atribuindo os dados do formulario ao usuario
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)


  }

}
