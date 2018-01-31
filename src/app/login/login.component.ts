
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// importamos el modelo
import { LoginModel } from './../models/login_model';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model = new LoginModel(null, null);
  public mensaje = '';
  public mostrar = false;
  onSubmit() {
    if (this.model.username == '' || this.model.password =='')
    {
      console.log(' campos vacios ');
      this.mensaje = 'Los campos estan vacios';
    }
    else {
      if(this.model.username === 'jorge' && this.model.password === 'hola')
      {
        console.log(' login completo ');
        this.mensaje = 'Login Valido';
         this.router.navigateByUrl('/dashboard');
      }
      else{
        this.mensaje = 'Sus credenciales no son validas';
      }
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
