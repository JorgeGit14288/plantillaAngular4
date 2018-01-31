import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login_model';


@Injectable()
export class LoginService {

  public model2 = new LoginModel('Jorge', 'amor');
  public mensaje = '';

  constructor() { }

  getLogin(model: LoginModel) {
    console.log('Estoy en el metodo para loguear');
    if (model.username == '' || model.password =='')
    {
      console.log(' campos vacios ');
     this.mensaje = 'Los campos no estan completos, por favor llenelos ';
    }
    else {
      if(model.username === 'jorge' && model.password === 'amor')
      {
        console.log(' login completo ');
        this.mensaje = 'ok';
   
      }
      else {
        this.mensaje = 'Sus credenciales no son correctas';
      }
    }
    return this.mensaje;
  }
  getLogOut() {
    console.log('Estoy en el metodo para deslogear');
    return true;
  }

}
