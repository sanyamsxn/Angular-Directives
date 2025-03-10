import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NavigationComponent, SigninComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authentication';

  emailReceived = '';
  passwordReceived = '';
  isAuthenticated = false;

  authData(data: {email:string, password:string}){
    this.emailReceived = data.email;
    this.passwordReceived = data.password;

    if(this.emailReceived==='sanyam@gmail.com' && this.passwordReceived==='sanyamsxn'){
      this.isAuthenticated = true;
    }
  }


}
