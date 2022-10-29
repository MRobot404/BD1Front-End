import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  cargar: boolean = false;
  persona: any = {};
  numero: any = 0;
  contador: boolean=false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  guardar() {
    let formulario: any = document.getElementById('formulario');
    if (formulario.reportValidity()) {
      this.cargar = true;
      this.servicioGuardar().subscribe(
        (response:any) => this.resultadoServicio(response)
      )
    }
   
  }

  resultadoServicio(res:any){
    this.cargar=false;
    console.log(res);
    alert("Persona Guardada con el Id"+res.idpersona)
  }
  servicioGuardar() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .post<any>(
        'http://localhost:8585/persona/guardar',
        this.persona,httpOptions
      )
      .pipe(catchError((e) => 'error'));
  }


}