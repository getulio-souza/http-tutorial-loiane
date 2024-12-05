import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poc-base',
  standalone: true,
  imports: [],
  templateUrl: './poc-base.component.html',
  styles: ``
})
export class PocBaseComponent implements OnInit {
  @Input() nome!: string;
  @Input() valor!: string;
  @Input() estilo!: string;

  constructor(){}

  ngOnInit(): void {
    
  }
}
