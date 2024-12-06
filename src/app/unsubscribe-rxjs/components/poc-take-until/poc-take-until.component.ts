import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValorService } from '../../services/enviar-valor.service';

@Component({
  selector: 'app-poc-take-until',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-take-until.component.html',
  styles: ``
})
export class PocTakeUntilComponent {
  nome = "Componente com take until"
  valor!: string;

  constructor(private service: EnviarValorService){}

  ngOnInit(){
    this.service.getValor().subscribe((data)=> {
      this.valor = data;
    })
  }

  ngOnDestroy(){
    console.log(`${this.nome} foi destruido`)
  }
}
