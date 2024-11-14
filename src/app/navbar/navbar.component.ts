import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  menuValue: boolean = false;

  openMenu() {
    this.menuValue = !this.menuValue;
  }
}
