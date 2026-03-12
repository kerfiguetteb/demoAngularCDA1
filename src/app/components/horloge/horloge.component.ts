import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-horloge',
  imports: [],
  templateUrl: './horloge.component.html',
  styleUrl: './horloge.component.css'
})
export class HorlogeComponent {

  @Input() time!:string

}
