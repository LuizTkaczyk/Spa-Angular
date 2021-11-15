import { Usuario } from './../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';

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

    //variaveis para comparar se as senhas são iguais
    let senha  = new FormControl('',[Validators.required, CustomValidators.rangeLength([6,15])]) //A SENHA DEVE TER DE 6 A 15 DIGITOS
    let senhaConf  = new FormControl('',[Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)])




    //criando um grupo de formulario com o formBuilder(recomendado) usando arrays
    this.cadastroForm = this.formBuilder.group({
      nome: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      cpf: ['', [Validators.required,NgBrazilValidators.cpf]],
      email: ['',[Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConf
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
