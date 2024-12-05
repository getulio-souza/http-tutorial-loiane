import { Component, OnDestroy, OnInit } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValorService } from '../../services/enviar-valor.service';

@Component({
  selector: 'app-poc',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc.component.html',
  styles: ``
})
export class PocComponent implements OnInit, OnDestroy {
  nome = 'Componente sem subscribe'
  valor = "";

  constructor(private service: EnviarValorService){}

  ngOnInit() {
    this.service.getValor().subscribe((data)=> {
      console.log('valor:', data )
      this.valor = data
    })
  }
  ngOnDestroy(){
    console.log(`${this.nome} foi destruido`)
  }
}
