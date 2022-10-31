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
    this.buscarPersonases();
  }

  buscarPersonases() {
    this.cargar = true;
    this.buscarPersonasesServicio().subscribe((response: any) =>
      this.mostrarPersonases(response)
    );
  }

  mostrarPersonases(response: any) {
    this.cargar = false;
    this.personas = response;
  }

  buscarPersonasesServicio(): Observable<any> {
    return this.http
      .get<any>('http://localhost:8585/persona/buscar')
      .pipe(catchError((e) => 'error'));
  }


  eliminar(persona: any) {
    this.cargar = true;
    this.eliminarPersonasesServicio(persona.idpersona).subscribe(
      (response: any) => this.buscarPersonases()
    );
  }

  eliminarPersonasesServicio(id: any): Observable<any> {
    return this.http
      .delete<any>('http://localhost:8585/persona/eliminar/' + id)
      .pipe(catchError((e) => 'error'));
  }

  actualizar(persona:any){
    console.log(persona);
    localStorage.setItem("persona",JSON.stringify(persona));
    console.log(localStorage.getItem("persona"));
    location.href="/actualizarpersonas";
    }
}
