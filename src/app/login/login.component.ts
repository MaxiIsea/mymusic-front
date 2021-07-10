import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../authentication.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loading = false;
    submitted = false;
    loginForm!: FormGroup;
    error = '';

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService    //implmementado por nosotros
    ) { }

    // se ejecuta cuando se inicializa el componente
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });

    //reset login status
    this.authenticationService.logout();
  }

  get f() { return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;

    //stop si el form es invalido
    if (this.loginForm.invalid){
      return;
    }

    this.loading = true;
    //email y password ingresado por el usuario
    this.authenticationService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
            (data: any) => {  //body del response
              this.router.navigate(['playlists']);  //lleva al usuario a la vista de playlists
            },
            (error:any) => {
              this.error = 'usuario incorrecto';
              this.loading = false;
            });
  }
}
