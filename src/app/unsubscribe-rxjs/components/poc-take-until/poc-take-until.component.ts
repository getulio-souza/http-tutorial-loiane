import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';

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
}
