import { Component } from '@angular/core';
import { SafeLinkDirective } from './safeLink.directive';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SafeLinkDirective],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
