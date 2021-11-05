import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bsh';
  isMenuOpen = false;

  constructor() { }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
