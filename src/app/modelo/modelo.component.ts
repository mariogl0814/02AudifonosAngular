import { Component } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrl: './modelo.component.css'
})
export class ModeloComponent {
  modelos = [
    { id: 'x', nombre: 'TechPRO X', precio: '$299' },
    { id: 'y', nombre: 'TechPRO Y', precio: '$399' },
    { id: 'z', nombre: 'TechPRO Z', precio: '$499' },

  ];
}
