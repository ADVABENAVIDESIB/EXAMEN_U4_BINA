import { Injectable } from '@angular/core';
import { Reservacion } from '../models/reservacion';
import { map } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  //private reservaciones: Reservacion[]; creo que no se ocupara esta
  constructor(private firestore:AngularFirestore) {
    
   }

   public getReservaciones(): Observable<Reservacion[]> {
    return this.firestore.collection('reservaciones').snapshotChanges().pipe(
      map(actions=> {
        return actions.map(a=>{
          console.log(a);
          const data = a.payload.doc.data() as Reservacion;
          console.log(data);
          const id = a.payload.doc.id;
          return { id,...data};
        })
      })
    )
  }

  public getReservacionPorId(id: string) {
    let result= this.firestore.collection("reservaciones").doc(id).valueChanges();
    return result;
  }

  public newReservacion(reservacion:Reservacion){
    this.firestore.collection('reservaciones').add(reservacion);
  }

}
