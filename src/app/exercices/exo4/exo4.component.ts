import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exo4',
  imports: [NgClass],
  templateUrl: './exo4.component.html',
  styleUrl: './exo4.component.css'
})
export class Exo4Component {

  isGreen: boolean = true

  toogle():void
  {
    this.isGreen = !this.isGreen
  }

}
