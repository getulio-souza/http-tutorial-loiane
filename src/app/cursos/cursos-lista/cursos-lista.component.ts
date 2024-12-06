import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos-lista.component.html',
  styles: ``
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[];
  // cursos$!: Observable<Curso[]>;

  constructor(private service: CursosService){}

  ngOnInit() {
    this.service.getList().subscribe((data)=> {
      console.log(data);
      this.cursos = data
    })

    // this.cursos$ = this.service.getList();
  }
}
