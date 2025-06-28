import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css',
})
export class ProyectosComponent {
  projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      url: 'https://enlace1.com',
      image: 'https://picsum.photos/seed/proyecto1/600/400',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      url: 'https://enlace2.com',
      image: 'https://picsum.photos/seed/proyecto2/600/400',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del Proyecto 3',
      url: 'https://enlace3.com',
      image: 'https://picsum.photos/seed/proyecto3/600/400',
    },
  ];
  colorPalettes = [
    {
      name: 'Nocturna Elegante',
      bg: 'bg-[#0f0f0f]', // Fondo negro profundo
      card: 'bg-[#1c1c1e]', // Gris oscuro elegante
      text: 'text-gray-100', // Texto general claro
      paragraph: 'text-gray-300', // Texto secundario más suave
      accent: 'text-[#facc15]', // Amarillo dorado
      link: 'text-[#facc15] hover:text-[#eab308]',
    },
    {
      name: 'Indigo & Rosé',
      bg: 'bg-[#1e1b4b]', // Índigo profundo
      card: 'bg-[#312e81]', // Morado elegante
      text: 'text-gray-100',
      paragraph: 'text-pink-200', // Rosa suave para párrafos
      accent: 'text-[#f472b6]', // Rosa acento
      link: 'text-[#f9a8d4] hover:text-[#f472b6]',
    },
    {
      name: 'Frost Minimal',
      bg: 'bg-[#e5e7eb]', // Gris suave, más oscuro que #f3f4f6
      card: 'bg-[#f9fafb] shadow', // Ligero gris casi blanco con sombra
      text: 'text-gray-800', // Sigue siendo sobrio y profesional
      paragraph: 'text-gray-700', // Buen contraste sobre gris claro
      accent: 'text-[#0ea5e9]', // Azul cian más notorio y vibrante
      link: 'text-[#0ea5e9] hover:text-[#0369a1]',
    },
    {
      name: 'Deep Forest',
      bg: 'bg-[#0d1b1e]', // Verde oscuro profundo
      card: 'bg-[#1b2d2f]', // Verde-gris sobrio
      text: 'text-gray-200',
      paragraph: 'text-gray-400',
      accent: 'text-[#84cc16]', // Verde lima sutil
      link: 'text-[#a3e635] hover:text-[#84cc16]',
    },
  ];

  selectedPalette = 0;

  changePalette(index: number) {
    this.selectedPalette = index;
  }
}
