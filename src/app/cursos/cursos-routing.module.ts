import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { UnsubscribePocComponent } from '../unsubscribe-rxjs/unsubscribe-poc/unsubscribe-poc.component';

const routes: Routes = [
  {path: '', component: CursosListaComponent},
  {path: 'usubscribe', component: UnsubscribePocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
