import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos-lista.component.html',
  styles: ``
})
export class CursosListaComponent implements OnInit {
  // cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>()

  constructor(private service: CursosService){}

  ngOnInit() {
    this.cursos$ = this.service.getList().pipe(
      catchError((err) => {
        console.error('there was an error. Check your connection',err); // Registra o erro
        this.error$.next(true)
        return of([]); // Retorna um array vazio em caso de erro
      })
    );
  }
}
