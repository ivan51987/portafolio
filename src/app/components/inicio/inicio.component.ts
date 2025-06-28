import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  constructor() {}

  generarCV(): void {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const margin = 20;
    const lineHeight = 7;
    let y = margin;

    // Colores definidos con tipado seguro
    const accentColor: [number, number, number] = [2, 132, 199]; // azul elegante
    const subtitleColor: [number, number, number] = [55, 65, 81]; // gris oscuro
    const textColor: [number, number, number] = [33, 33, 33]; // texto principal

    // === Encabezado ===
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(22);
    pdf.setTextColor(...accentColor);
    pdf.text('Ivan Flores Flores', margin, y);
    y += lineHeight + 5;

    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...subtitleColor);
    pdf.text('Desarrollador Full Stack | Innovador Tecnológico', margin, y);
    y += lineHeight + 5;

    pdf.setDrawColor(200);
    pdf.line(margin, y, 210 - margin, y);
    y += 8;

    // === Contacto ===
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(12);
    pdf.setTextColor(...textColor);
    pdf.text('Contacto:', margin, y);
    y += lineHeight;

    pdf.setFont('helvetica', 'normal');
    pdf.text('ivanflores51987@gmail.com | talivan51987@gmail.com', margin, y);
    y += lineHeight;
    pdf.text('GitHub: github.com/talivan5', margin, y);
    y += lineHeight;
    pdf.text('LinkedIn: linkedin.com/in/ivan-flores-flores', margin, y);
    y += lineHeight + 4;

    pdf.line(margin, y, 210 - margin, y);
    y += 8;

    // === Educación ===
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.setTextColor(...accentColor);
    pdf.text('Educación', margin, y);
    y += lineHeight + 2;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    pdf.setTextColor(...textColor);
    pdf.text('• INSCO-ESAE - Técnico Superior en Sistemas Informáticos', margin, y);
    y += lineHeight;
    pdf.text('  Oruro, Bolivia', margin + 4, y);
    y += lineHeight;
    pdf.text('• UTO - Especialización en Desarrollo de Software', margin, y);
    y += lineHeight + 6;

    pdf.line(margin, y, 210 - margin, y);
    y += 8;

    // === Experiencia Laboral ===
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.setTextColor(...accentColor);
    pdf.text('Experiencia Laboral', margin, y);
    y += lineHeight + 2;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    pdf.setTextColor(...textColor);
    pdf.text('• SENASAG - Technical Developer II', margin, y);
    y += lineHeight;
    pdf.text('  Ene 2024 - Dic 2024', margin + 4, y);
    y += lineHeight;
    pdf.text('  - Supervisión agrícola digital. Reducción de errores en un 25%.', margin + 6, y);
    y += lineHeight;

    pdf.text('• Dirección General de Migración - Analista de Sistemas', margin, y);
    y += lineHeight;
    pdf.text('  Feb 2022 - Ene 2024', margin + 4, y);
    y += lineHeight;
    pdf.text('  - Plataforma migratoria. Procesamiento optimizado (-40%).', margin + 6, y);
    y += lineHeight;
    pdf.text('  - Autenticación con OAuth2 y JWT.', margin + 6, y);
    y += lineHeight + 6;

    pdf.line(margin, y, 210 - margin, y);
    y += 8;

    // === Habilidades Técnicas ===
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(14);
    pdf.setTextColor(...accentColor);
    pdf.text('Habilidades Técnicas', margin, y);
    y += lineHeight + 2;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    pdf.setTextColor(...textColor);
    const skills = [
      'Lenguajes: Python, JavaScript, Java, PHP, TypeScript',
      'Frameworks: Django, Vue.js, Angular, React, Laravel, Node.js, Flutter',
      'Bases de datos: PostgreSQL, MySQL, MongoDB, Oracle',
      'Infraestructura: Docker, Kubernetes, AWS, Azure',
      'Herramientas: Git, CI/CD, Redis, APIs REST, GraphQL',
    ];
    for (const skill of skills) {
      pdf.text(`• ${skill}`, margin, y);
      y += lineHeight;
    }

    // === Footer ===
    y = 290; // última posición visible
    pdf.setFontSize(10);
    pdf.setTextColor(120);
    pdf.text('Generado automáticamente | ivanflores.dev', margin, y);

    pdf.save('ivan_flores_cv.pdf');
  }
}
