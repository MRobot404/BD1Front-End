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

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
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
     }else if(this.resultado2.includes("ADMIN") && this.resultado3.includes("ADMIN")){
      location.href = '/menu';
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
        'http://localhost:8585/persona/login',
        this.persona,
        httpOptions
      )
      .pipe(catchError((e) => 'Error'));
  }
}
