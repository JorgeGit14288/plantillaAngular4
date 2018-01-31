
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

  onSubmit() {
    if (this.model.username == '' || this.model.password=='')
    {

      console.log(' campos vacios '); 
    }
    else
    {
      if(this.model.username=='jorge' && this.model.password=='hola')
      {
        console.log(' login completo ');
        this.router.navigateByUrl('/dashboard');
      }
    }
      console.log('hello');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
