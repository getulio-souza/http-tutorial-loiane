import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValorService } from '../../services/enviar-valor.service';
import { Subject, takeUntil } from 'rxjs';

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
  unsub$ = new Subject()

  constructor(private service: EnviarValorService){}

  ngOnInit(){
    this.service.getValor().pipe(
      takeUntil(this.unsub$)
    ).subscribe((data => {
      this.valor = data;
    }))
  }

  ngOnDestroy(){
    this.unsub$.next(this.valor)
    this.unsub$.complete();
    console.log(`${this.nome} foi destruido`)
  }
}
