import { Component } from '@angular/core';
import { PlatoService } from '../../services/plato-service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IPlato } from '../../models/plato';

@Component({
  selector: 'menu',
  standalone: true, 
  imports: [AsyncPipe],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  platos$!: Observable<IPlato[]>; 

  constructor(private platoService: PlatoService) {
    this.platos$ = this.platoService.getPlatos();
  }
}