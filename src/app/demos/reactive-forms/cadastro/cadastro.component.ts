import { ValidationMessages, GenericValidator, DisplayMessage } from './generic-form-validation';
import { Usuario } from './../../models/usuario';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MASKS, NgBrazilValidators } from 'ng-brazil';
import { CustomValidators } from 'ng2-validation';
import { from, fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],

})
export class CadastroComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElement: ElementRef[]


  cadastroForm: FormGroup;//em caso de erros na declação , alterar para false o stric, no tsconfig.
  usuario: Usuario //importando da classe usuario
  formResult: string = ''
  public MASKS = MASKS; //para o uso das mascaras



  //VALIDAÇÃO AVANÇADA
  validationMessage: ValidationMessages
  genericValidator: GenericValidator
  displayMessages: DisplayMessage = {}

  constructor(private formBuilder: FormBuilder) {
    //mensagens retornadas
    this.validationMessage = {
      nome: {
        required: 'O nome é obrigatório',
        minlength: 'O nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O nome precisa ter no máximo 50 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },

      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },

      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
        equalTo: 'As senhas não conferem'
      }
    }

    this.genericValidator = new GenericValidator(this.validationMessage)
  }



  ngOnInit(): void {

    //variaveis para comparar se as senhas são iguais
    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]) //A SENHA DEVE TER DE 6 A 15 DIGITOS
    let senhaConf = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)])

    //criando um grupo de formulario com o formBuilder(recomendado) usando arrays
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConf
    })

  }



  ngAfterViewInit(): void {
    let controlBlurs:Observable<any>[] = this.formInputElement.map((formControl:ElementRef) => fromEvent(formControl.nativeElement, 'blur'))
    merge(...controlBlurs).subscribe(()=>{
      this.displayMessages = this.genericValidator.processarMensagens(this.cadastroForm)
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

    } else {
      this.formResult = "Não submetido"
    }
  }

}
