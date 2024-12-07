import { Component, OnDestroy, OnInit } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValorService } from '../../services/enviar-valor.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-poc-take',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-take.component.html',
  styles: ``
})
export class PocTakeComponent implements OnInit, OnDestroy {

  nome='componente com take';
  valor!: string
  
  constructor(private service: EnviarValorService){}

  ngOnInit(){
    this.service.getValor().pipe(
      take(1)
    ).subscribe((data)=> {
      this.valor = data;
    })
  }

  ngOnDestroy(){
    
    console.log(`${this.nome} foi destruido`)
  }

}
