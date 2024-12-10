import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { CommonModule } from '@angular/common';
import { catchError, Observable, of, Subject } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cursos-lista.component.html',
  styles: ``
})
export class CursosListaComponent implements OnInit {
  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>()

  constructor(private service: CursosService){}

  ngOnInit() {
   this.onRefresh()
  }

  onRefresh() {
  this.cursos$ = this.service.getList().pipe(
      catchError((err) => {
        console.error('there was an error. Check your connection',err);
        this.error$.next(true)
        return of();
      })
    );
  }
}
