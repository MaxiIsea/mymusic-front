import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

/**
 * El servicio de autenticación es utilizado para iniciar o cerrar sesión.
 * *
 * El método login() envía las credenciales del usuario a la API mediante un request de tipo post.
 * Si el login tiene éxito, se almacena localmente el usuario con su JWT.
 *
 * El método logout() elimina el objeto User actual del almacenamiento local.
 */

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: String, password: String){ //email y password son del body de la request
    return this.http.post<any>(environment.API_URL + 'login', {email,password} , {observe:'response'})
      .pipe(map(res => {
        console.log(res);
        //login succesfull con JWT token
        if(res.headers.get("Authorization")){
          //store user details y JWT token in local storage para mantener el usuario logeado
          let r:any = res.headers.get("Authorization"); 
          localStorage.setItem('apiKey',r);
        }
        return res;
      }));
  }

  logout() {
    //remove user form local storage
    localStorage.removeItem('apiKey');
  }
}
