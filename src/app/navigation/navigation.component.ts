import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  answer = false;
  onClick(url:string, event:Event){
    this.answer = window.confirm('do you want to open this site?');
    if(this.answer){
      window.open(url, '_blank');
    }
    else{
      event.preventDefault();
    }
  }
}
