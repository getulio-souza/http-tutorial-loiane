import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocComponent } from '../components/poc/poc.component';  // Import PocComponent
import { PocTakeComponent } from '../components/poc-take/poc-take.component';
import { PocAsyncComponent } from '../components/poc-async/poc-async.component';
import { PocBaseComponent } from '../poc-base/poc-base.component';
import { PocTakeUntilComponent } from '../components/poc-take-until/poc-take-until.component';
import { PocUnsubComponent } from '../components/poc-unsub/poc-unsub.component';
import { CommonModule } from '@angular/common';
import { EnviarValorService } from '../services/enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc',
  standalone: true,
  imports: [
    PocComponent,
    PocTakeComponent, 
    PocAsyncComponent, 
    PocBaseComponent, 
    PocTakeUntilComponent, 
    PocUnsubComponent,
    CommonModule
  ],
  templateUrl: './unsubscribe-poc.component.html',
  styles: []
})
export class UnsubscribePocComponent {
  // Component logic here
  mostrarComponente: boolean = true;

  constructor(private service: EnviarValorService){}

  emitirValor(){

  }

  destruirComponente(){
    this.mostrarComponente = !this.mostrarComponente;
  }
}