import { Routes } from '@angular/router';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';
import { UnsubscribePocComponent } from './unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component';
import { NovoCursoComponent } from './cursos/novo-curso/novo-curso.component';

export const routes: Routes = [
  { path: '', component: CursosListaComponent },
  { path: 'usubscribe', component: UnsubscribePocComponent },
  { path: 'novo', component: NovoCursoComponent},
];
