import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exo5',
  imports: [NgStyle],
  templateUrl: './exo5.component.html',
  styleUrl: './exo5.component.css'
})
export class Exo5Component {

  fontSize: number = 16;
  increase(){
    this.fontSize += 2
  }


}
