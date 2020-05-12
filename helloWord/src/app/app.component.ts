import { Component } from '@angular/core';
import { SpotifyService } from './common/service/SpotifyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  display: boolean;
  constructor() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display;
  }
}
