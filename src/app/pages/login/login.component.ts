
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// importamos el modelo
import { LoginModel } from './../../models/login_model';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public model = new LoginModel(null, null);
  public mensaje = '';
  public mostrar = false;

  constructor(private router: Router, private service: LoginService) { }

  onSubmit() {
   this.mensaje = this.service.getLogin(this.model);

   if (this.mensaje === 'ok') {
    this.router.navigateByUrl('/dashboard');
   }
   else {
     this.mensaje = this.mensaje;
   }
  }

  ngOnInit() {
  }

}
