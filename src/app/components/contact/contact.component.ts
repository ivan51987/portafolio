import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms'; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarCorreo() {
    const templateParams = {
      from_name: this.nombre,
      from_email: this.correo,
      message: this.mensaje,
    };
    
    emailjs.send('service_b7tsb3e', 'template_mbp9kck', templateParams, 'tEKx4EhFf3HIL8JPN')
      .then((response) => {        
        Swal.fire({
          title: '¡Correo Enviado!',
          text: 'Tu mensaje ha sido enviado correctamente.'+ response.text,
          icon: 'success',
          confirmButtonText: 'Cerrar'
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el correo.'+ error,
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      });
  }
}
