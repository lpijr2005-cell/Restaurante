import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatoService } from '../services/plato-service';
import { IPlato } from '../models/plato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plato-form',
  standalone: true,
  imports: [ReactiveFormsModule], 
  templateUrl: './plato-form.html'
})
export class PlatoFormComponent {
  private platoService = inject(PlatoService);
  private router = inject(Router);

  platoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(0.1)]),
    category: new FormControl('entrantes'),
    image: new FormControl('', [Validators.required]),
    enabled: new FormControl(true)
  });

  addPlato() {
    if (this.platoForm.valid) {
      
      const nuevoPlato = this.platoForm.value as IPlato;
      
      this.platoService.savePlato(nuevoPlato).subscribe({
        next: () => {
          alert('¡Plato añadido con éxito!');
          this.router.navigate(['/menu']); 
        },
        error: (err) => console.error('Error al guardar:', err)
      });
    }
  }
}