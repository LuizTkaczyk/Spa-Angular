import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  
})
export class CadastroComponent implements OnInit {

  //em caso de erros na declação , alterar para false o stric, no tsconfig.
  cadastroForm: FormGroup;
  //importando da classe usuario
  usuario: Usuario

  formResult: string = ''

  public MASKS = MASKS;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //criando um grupo de formulario com o formBuilder(recomendado) usando arrays
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required,NgBrazilValidators.cpf]],
      email: ['',[Validators.required, Validators.email]],
      senha: [''],
      senhaConfirmacao: ['']
    })

  }

  adicionarUsuario() {
    //capturando o os dados do formulario e guardando em uma variavel
    //let x = this.cadastroForm.value

    //com essa validação o botão submit somente será ativado caso essas condições sejam satisfeitas (se o cadastroForm for valido e estiver sido "sujo")
    if (this.cadastroForm.dirty && this.cadastroForm.valid) {
      //atribuindo os dados do formulario ao usuario
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value)

      //transformando o resultado em uma string ( o resultado é visto no html!)
      this.formResult = JSON.stringify(this.cadastroForm.value)

    }else{
      this.formResult = "Não submetido"
    }
  }

}
