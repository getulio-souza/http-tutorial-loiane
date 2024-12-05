import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';

@Component({
  selector: 'app-poc-take',
  standalone: true,
  imports: [PocBaseComponent],
  templateUrl: './poc-take.component.html',
  styles: ``
})
export class PocTakeComponent {
  nome='componente com take';
  valor!: string
}
