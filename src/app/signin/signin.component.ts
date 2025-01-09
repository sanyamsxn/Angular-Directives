import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  email = '';
  password = '';

  dataAuthenticate = output<{email: string; password: string}>();


  onSubmit(){
    this.dataAuthenticate.emit({email:this.email, password:this.password});
  }
}
