import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';
import { EnviarValorService } from '../../services/enviar-valor.service';

@Component({
  selector: 'app-poc-async',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-async.component.html',
  styles: ``
})
export class PocAsyncComponent {

  nome= 'componente com async';
  valor!: string;
}
