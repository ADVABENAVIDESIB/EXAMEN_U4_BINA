import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCreateReservationPageRoutingModule } from './view-create-reservation-routing.module';

import { ViewCreateReservationPage } from './view-create-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ViewCreateReservationPageRoutingModule
  ],
  declarations: [ViewCreateReservationPage]
})
export class ViewCreateReservationPageModule {}
