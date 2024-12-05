import { Component } from '@angular/core';
import { PocBaseComponent } from '../../poc-base/poc-base.component';

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
}
