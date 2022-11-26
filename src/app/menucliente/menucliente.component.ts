import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-menucliente',
  templateUrl: './menucliente.component.html',
  styleUrls: ['./menucliente.component.css']
})
export class MenuclienteComponent implements OnInit {
  persona:any = {};
  inmuebles: any = [];
  cargar: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarinmuebles();
    let temporal: string = localStorage.getItem('persona');
    if(temporal){
      this.persona=JSON.parse(temporal);
      console.log(this.persona)
    }
  }

  buscarinmuebles() {
    this.cargar=true;
    this.buscarinmueblesServicio().subscribe((response:any) =>
    this.mostrarinmuebles(response)
    );
  
  }
  
  mostrarinmuebles(response: any) {
    this.cargar = false;
    this.inmuebles = response;
    console.log(this.inmuebles);
   
  }

  buscarinmueblesServicio(): Observable<any>{
    return this.http.get<any>('http://localhost:8585/inmueble/buscar')
    .pipe(catchError((e) => 'error'));
  }
  logout(){
    localStorage.removeItem("persona");
    location.href="/";
   }
   
   redirigir (inmueble:any){
    console.log(inmueble)
   }
}
