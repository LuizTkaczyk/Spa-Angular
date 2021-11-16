import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        FooterComponent
    ],
    imports: [
        CommonModule, //Sempre que criar um modulo personalizado, importar a CommonModule
        RouterModule
    ],
    exports:[
        //Para funcionar esse modulo ele deve ser exportado!!!!!!!!!!!!!!!!!
        MenuComponent,
        HomeComponent,
        FooterComponent
    ]

})



export class NavegacaoModule {

}