import { ClienteService } from './../services/cliente.service';
import { Cliente } from './../models/cliente';
import { Reservacion } from './../models/reservacion';
import { ReservacionService } from './../services/reservacion.service';
import { Component, OnInit } from '@angular/core';
// import { format, parseISO } from 'date-fns';

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-create-reservation',
  templateUrl: './view-create-reservation.page.html',
  styleUrls: ['./view-create-reservation.page.scss'],
})
export class ViewCreateReservationPage implements OnInit {

  public minDate: any = new Date().toISOString();
  public minDateOut:any;
  public myForm: FormGroup;
  cliente:Cliente;
  constructor(  private fb: FormBuilder,private service:ReservacionService,
    private clienteService:ClienteService,
    private aroute:ActivatedRoute) { 
  
     this.aroute.queryParams.subscribe((params) => {
      // this.student = this.studentService.getStudentByControlNumber(params.cn);
      this.clienteService.getClientePorNumeroTel(params.token).subscribe(
        res => {
          console.log(res);          
          this.cliente = res as Cliente;
        }
      )
    });
    
  }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        date_in: [this.minDateOut, Validators.compose([Validators.required])],
        alberca: [0, Validators.compose([Validators.required])],
        brincolin: [false, Validators.compose([Validators.required])],
        mesa: [false, Validators.compose([Validators.required])],
        futbolito: [false, Validators.compose([Validators.required])]
      }
    );
  }

  public add(){
    console.log(this.cliente);
    
    let total = 1000;
    let alberca = this.myForm.value.alberca/100;
    total += 500*alberca;    
    if(this.myForm.value.brincolin)
      total +=200
    if(this.myForm.value.mesa)
      total +=150
    if(this.myForm.value.futbolito)
      total +=100

    let date = this.myForm.value.date_in;
    
    const reservacion:Reservacion = {
      cliente: this.cliente.nombre,
      fecha:date,
      telefono:this.cliente.telefono,
      total
    }
    console.log(reservacion);

    this.service.newReservacion(reservacion);
  }
}
