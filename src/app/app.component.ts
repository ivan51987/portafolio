import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { InicioComponent } from './components/inicio/inicio.component';
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, InicioComponent, ContactComponent, ProyectosComponent, FooterComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-angular';
}
