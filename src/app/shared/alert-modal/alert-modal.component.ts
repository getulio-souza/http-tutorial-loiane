import { CommonModule } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-modal.component.html',
  styles: ``
})
export class AlertModalComponent implements OnInit{

  @Input()type = "success";
  @Input()message: string = "";

  constructor(){}

  ngOnInit(): void {

  }
}
