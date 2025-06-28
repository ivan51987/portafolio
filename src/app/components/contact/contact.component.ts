import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarCorreo() {
  // Validar campos
  if (!this.nombre.trim() || !this.correo.trim() || !this.mensaje.trim()) {
    Swal.fire({
      title: 'Campos incompletos',
      text: 'Por favor, completa todos los campos antes de enviar.',
      icon: 'warning',
      confirmButtonText: 'Cerrar',
    });
    return;
  }

  // Validar formato email con regex simple
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.correo)) {
    Swal.fire({
      title: 'Correo inválido',
      text: 'Por favor, ingresa un correo electrónico válido.',
      icon: 'warning',
      confirmButtonText: 'Cerrar',
    });
    return;
  }

  // Si pasa validación, enviar el correo
  const templateParams = {
    from_name: this.nombre,
    from_email: this.correo,
    message: this.mensaje,
  };

  emailjs
    .send(
      'service_b7tsb3e',
      'template_mbp9kck',
      templateParams,
      'tEKx4EhFf3HIL8JPN'
    )
    .then((response) => {
      Swal.fire({
        title: '¡Correo Enviado!',
        text: 'Tu mensaje ha sido enviado correctamente.',
        icon: 'success',
        confirmButtonText: 'Cerrar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.nombre = '';
          this.correo = '';
          this.mensaje = '';
        }
      });
    })
    .catch((error) => {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el correo.' + error,
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
    });
}

}
