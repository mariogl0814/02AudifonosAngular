import { Component } from '@angular/core';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrl: './icono.component.css'
})
export class IconoComponent {
  iconos = [
    { vinculo: 'icono-sonido.svg', alternativo: 'imagen icono', titulo: 'Gran Sonido', parrafo: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duisconvallis porttitor sodales. Duis accumsan lorem neque.'},
    { vinculo: 'icono-garantia.svg', alternativo: 'imagen icono', titulo: 'Garantía de por vida', parrafo: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duisconvallis porttitor sodales. Duis accumsan lorem neque.' },
    { vinculo: 'icono-bateria.svg', alternativo: 'imagen icono', titulo: '+20 Horas de Bateria', parrafo: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duisconvallis porttitor sodales. Duis accumsan lorem neque.' }
  ];
}
