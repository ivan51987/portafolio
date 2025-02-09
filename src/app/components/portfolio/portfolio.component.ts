import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    { title: 'Proyecto 1', description: 'Descripción del Proyecto 1', url: 'https://enlace1.com' },
    { title: 'Proyecto 2', description: 'Descripción del Proyecto 2', url: 'https://enlace2.com' },
    { title: 'Proyecto 3', description: 'Descripción del Proyecto 3', url: 'https://enlace3.com' }
  ];
}
