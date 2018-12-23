import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'sondramadved';
}
