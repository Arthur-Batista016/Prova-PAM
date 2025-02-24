import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  title = 'HELLO WORLD GALERA';
  resultado = 0
  foto = 'favicon.ico'
  exibeTexto:boolean = false
  
  somar(n1:number,n2:number) {
    return  n1+n2
  }
}
