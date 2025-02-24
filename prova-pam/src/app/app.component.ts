import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InterpolationComponent,PropertyBindingComponent,EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HELLO WORLD GALERA';
  resultado = 0
  foto = 'favicon.ico'
  
  
  somar(n1:number,n2:number) {
    return  n1+n2
  }



}
