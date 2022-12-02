import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewCreateReservationPage } from './view-create-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCreateReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewCreateReservationPageRoutingModule {}
