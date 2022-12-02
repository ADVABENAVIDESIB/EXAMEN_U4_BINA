import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { map } from 'rxjs/operators'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes:Cliente;
  constructor(private firestore:AngularFirestore) {

  }

/*
  public getClientes(): Observable<Cliente[]> {
    return this.firestore.collection('cliente').snapshotChanges().pipe(
      map(actions=> {
        return actions.map(a=>{
          console.log(a);
          const data = a.payload.doc.data() as Cliente;
          console.log(data);
          const id = a.payload.doc.id;
          return { id,...data};
        })
      })
    )
  }
  */
  public getClientePorNumeroTel(tel: string) {
    return this.firestore.collection('cliente').doc(tel);
  }



}
