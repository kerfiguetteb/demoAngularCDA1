import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-exo3',
  imports: [],
  templateUrl: './exo3.component.html',
  styleUrl: './exo3.component.css'
})
export class Exo3Component {

  count : number = 0
  incremente(){
    this.count = this.count + 1 
  }
}
