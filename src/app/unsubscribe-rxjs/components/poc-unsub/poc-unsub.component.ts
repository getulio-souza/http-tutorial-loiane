import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValorService } from '../../services/enviar-valor.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-poc-unsub',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-unsub.component.html',
  styles: ``
})
export class PocUnsubComponent {
  nome = "componente sem subscribe"
  valor!: string;

  //se tiver mais de uma subscription, podemos inserir um array []
  sub:Subscription[]= [];

  constructor(private service: EnviarValorService){}

  ngOnInit(){
    this.sub.push(this.service.getValor().subscribe((data)=> {
      this.valor = data;
    }));
  }

  ngOnDestroy(){
    console.log(`${this.nome} foi destruido`)
    //como estamos trabalhando com um array, podemos usar o 
    //metodo forEach para percorrer cada subscription e fazer o unsubscribe
    this.sub.forEach(v => v.unsubscribe())
  }
}
