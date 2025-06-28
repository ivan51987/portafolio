import { Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactComponent } from './components/contact/contact.component';
import { HojaDeVidaComponent } from './components/hoja-de-vida/hoja-de-vida.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: ProyectosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'hoja-de-vida', component: HojaDeVidaComponent},
  { path: '**', redirectTo: '' }
];

