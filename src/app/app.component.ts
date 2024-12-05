import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CursosListaComponent } from "./cursos/cursos-lista/cursos-lista.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CursosListaComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'requests-http';
}
