import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private cdr: ChangeDetectorRef) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    console.log("Menú presionado:", this.menuOpen);
  }
}
