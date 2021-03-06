import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bsh';
  isMenuOpen = false;
  isChatOpen = false;
  isSearchEnable = false;

  constructor(public router: Router) {
   }

  openMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
