import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
})
export class TopNavbarComponent {
  menuOpen = false;

  toggleMenu() {

    console.log('menuOpen', this.menuOpen);
    this.menuOpen = !this.menuOpen;
  }
}
