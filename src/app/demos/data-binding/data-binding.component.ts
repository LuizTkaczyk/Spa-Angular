import { Component} from '@angular/core';
@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',

})
export class DataBindingComponent {

  public contarClique: number = 0

  public urlImagem: string = "assets/celular.jpg"

  public nome1: string = ''
  public nome2: string = ''

  //metodos para contagem e para zerar o contador
  adicionarClique() {
    this.contarClique++
  }
  zeraContador() {
    this.contarClique = 0
  }

  keyUp(event:any) {
    this.nome1 = event.target.value
  }

}
