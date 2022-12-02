import { Component } from '@angular/core';
import { Reservacion } from '../models/reservacion';
import { ReservacionService } from '../services/reservacion.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public reservaciones:Reservacion[];
  constructor(private reservaServicio:ReservacionService) { 
    this.reservaServicio.getReservaciones().subscribe(
      res => {
        this.reservaciones = res;
        console.log(this.reservaciones);
      }
    )
  }
}
