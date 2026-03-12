import { Component, Input, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import User from '../../models/user.model';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// composant enfant
export class UserComponent {
  // user = input<User>();
@Input()
user!:User

}
