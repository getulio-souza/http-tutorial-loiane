import { Component, OnDestroy, OnInit } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValorService } from '../../services/enviar-valor.service';

@Component({
  selector: 'app-poc-async',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-async.component.html',
  styles: ``
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome= 'componente com async';
  valor!: string;
  
  constructor(private service: EnviarValorService){}

  ngOnInit() {
    this.service.getValor().subscribe((data)=> {
      this.valor = data;
    })
  }

  ngOnDestroy(){
    console.log(`${this.nome} foi destruido`)
  }
}
