import { Component } from '@angular/core';
import { NgStyle } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo7',
  imports: [NgStyle, FormsModule],
  templateUrl: './exo7.component.html',
  styleUrl: './exo7.component.css'
})
export class Exo7Component {
  fontSize: number = 16;

}
