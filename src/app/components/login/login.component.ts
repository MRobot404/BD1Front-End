import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorInicio: boolean = false;
  loading: boolean = false;
  persona: any = {};
  resultado2: any;
  resultado3: any;
  signedIn:boolean= false;
  signedIn2:boolean= false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.signedIn=false;
    this.signedIn2=false;
    localStorage.setItem('estado1',JSON.stringify(this.signedIn));
      localStorage.setItem('estado2',JSON.stringify(this.signedIn2));
  }
  login() {
    let formulario: any = document.getElementById('login');
    let formularioValido: boolean = formulario.reportValidity();
    if (formularioValido) {
      this.loading = true;
      this.loginService().subscribe((data) => this.iniciarSesion(data));
    }
    this.resultado2=(<HTMLInputElement>document.getElementById("usuario")).value;
    this.resultado3=(<HTMLInputElement>document.getElementById("contra")).value;
  }
  iniciarSesion(resultado: any) {
    this.loading = false;
    
    console.log(resultado);

    if (resultado.length > 0) {
      localStorage.setItem('persona', JSON.stringify(resultado[0]));
      location.href = '/menucliente';
      this.signedIn=false;
      this.signedIn2=true;
      localStorage.setItem('estado1',JSON.stringify(this.signedIn));
      localStorage.setItem('estado2',JSON.stringify(this.signedIn2));
     }else if(this.resultado2.includes("ADMIN") && this.resultado3.includes("ADMIN")){
      if(this.resultado2.includes("ADMIN") ){
        if(this.resultado3.includes("ADMIN")){
          this.signedIn=true;
          this.signedIn2=true;
          location.href = '/menu';
          localStorage.setItem('estado1',JSON.stringify(this.signedIn));
          localStorage.setItem('estado2',JSON.stringify(this.signedIn2));
        }else if(resultado.length > 0){
          localStorage.setItem('empleado', JSON.stringify(resultado[0]));
          location.href = '/menucliente';
          this.signedIn=false;
          this.signedIn2=true;
          localStorage.setItem('estado1',JSON.stringify(this.signedIn));
        }else{
          this.errorInicio = true;
        }
      }else{
        this.errorInicio = true;
      }
      
    } else {
      this.errorInicio = true;
    }
  }

  loginService() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(
        'http://localhost:8585/cliente/login',
        this.persona,
        httpOptions
      )
      .pipe(catchError((e) => 'Error'));
  }
}
