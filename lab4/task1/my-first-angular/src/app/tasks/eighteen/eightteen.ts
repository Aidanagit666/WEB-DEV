import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarService } from './car.service';

@Component({
  selector: 'app-eighteen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p *ngFor="let car of cars">{{ car }}</p>
  `,
})
export class Eighteen {
  carService = inject(CarService);
  cars = this.carService.getCars();
}
