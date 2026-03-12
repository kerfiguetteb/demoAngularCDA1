import { Component } from '@angular/core';
import { NgStyle } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo8',
  imports: [NgStyle, FormsModule],
  templateUrl: './exo8.component.html',
  styleUrl: './exo8.component.css'
})
export class Exo8Component {
  color: string = '#000000'
}
