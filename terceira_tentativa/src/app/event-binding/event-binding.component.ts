import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
 visu_texto:boolean = true
 esconder_exbibir(){
  this.visu_texto = !this.visu_texto
 }
}
