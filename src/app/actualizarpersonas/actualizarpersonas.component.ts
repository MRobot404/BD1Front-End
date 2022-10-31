import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-actualizarpersonas',
  templateUrl: './actualizarpersonas.component.html',
  styleUrls: ['./actualizarpersonas.component.css']
})
export class ActualizarpersonasComponent implements OnInit {

  constructor(private http: HttpClient) { }
  cargar: boolean = false;
  persona: any = {};
  ngOnInit(): void {
    let temporal: any = localStorage.getItem('persona');
    this.persona =JSON.parse (temporal);
   console.log(temporal);
  }
  logout(){
    localStorage.removeItem("persona");
    location.href="/";
   }

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
