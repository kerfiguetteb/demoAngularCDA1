import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-exo6',
  imports: [FormsModule],
  templateUrl: './exo6.component.html',
  styleUrl: './exo6.component.css'
})
export class Exo6Component {
firstName: string = ""
lastName: string = ""
}
