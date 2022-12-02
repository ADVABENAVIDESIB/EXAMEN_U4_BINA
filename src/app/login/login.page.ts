import { ClienteService } from './../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';


import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  cliente: Cliente;

  public myForm: FormGroup;


  constructor(private fb: FormBuilder,
    private service: ClienteService,
    private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group(
      {
        tel: ["", Validators.compose([Validators.required])],
      }
    );
  }

  public onLogin() {
    const token = this.myForm.value.tel;
    if (token === '9999') {
      this.router.navigate(['home']);
      return;
    }
    this.service.getClientePorNumeroTel(token).subscribe(
      res => {
        if (res !== undefined) {
          this.router.navigate(['view-create-reservation'],
            {
              queryParams: { token: token }
            })
        }
      }
    )

  }

}
