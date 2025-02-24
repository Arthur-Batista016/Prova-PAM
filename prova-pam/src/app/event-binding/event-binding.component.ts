import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  exibir_texto:boolean = true
  
  alertar(){
    alert("TA CALOR DMS")
    this.exibir_texto = !this.exibir_texto
  }
}
