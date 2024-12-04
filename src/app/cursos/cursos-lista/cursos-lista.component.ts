import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [],
  templateUrl: './cursos-lista.component.html',
  styles: ``
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[];

  constructor(private service: CursosService){}

  ngOnInit(): void {

  }
}
