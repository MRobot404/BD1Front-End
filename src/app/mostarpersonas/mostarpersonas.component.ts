import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-mostarpersonas',
  templateUrl: './mostarpersonas.component.html',
  styleUrls: ['./mostarpersonas.component.css']
})
export class MostarpersonasComponent implements OnInit {
  personas: any = [];
  cargar: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarProfesores();
  }

  buscarProfesores() {
    this.cargar = true;
    this.buscarProfesoresServicio().subscribe((response: any) =>
      this.mostrarProfesores(response)
    );
  }

  mostrarProfesores(response: any) {
    this.cargar = false;
    this.personas = response;
  }

  buscarProfesoresServicio(): Observable<any> {
    return this.http
      .get<any>('http://localhost:8585/persona/buscar')
      .pipe(catchError((e) => 'error'));
  }


  eliminar(persona: any) {
    this.cargar = true;
    this.eliminarProfesoresServicio(persona.idpersona).subscribe(
      (response: any) => this.buscarProfesores()
    );
  }

  eliminarProfesoresServicio(id: any): Observable<any> {
    return this.http
      .delete<any>('http://localhost:8585/persona/eliminar/' + id)
      .pipe(catchError((e) => 'error'));
  }

  editar(persona: any) {
    console.log(persona);
    localStorage.setItem("personaid",JSON.stringify(persona));
 console.log(localStorage.getItem("personaid"));
 location.href="/actualizarpersonas";
   }
}
