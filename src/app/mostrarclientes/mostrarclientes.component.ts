import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-mostrarclientes',
  templateUrl: './mostrarclientes.component.html',
  styleUrls: ['./mostrarclientes.component.css']
})
export class MostrarclientesComponent implements OnInit {
  clientes: any = [];
  cargar: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarClientes();
  }

  buscarClientes() {
    this.cargar = true;
    this.buscarClientesServicio().subscribe((response: any) =>
      this.mostrarClientes(response)
    );
  }

  mostrarClientes(response: any) {
    this.cargar = false;
    this.clientes = response;
  }
  buscarClientesServicio(): Observable<any> {
    return this.http
      .get<any>('http://localhost:8585/cliente/buscar')
      .pipe(catchError((e) => 'error'));
  }

  eliminar(cliente: any) {
    this.cargar = true;
    this.eliminarClienteServicio(cliente.id_cliente).subscribe(
      (response: any) => this.buscarClientes()
    );
  }

  eliminarClienteServicio(id: any): Observable<any> {
    return this.http
      .delete<any>('http://localhost:8585/cliente/eliminar/' + id)
      .pipe(catchError((e) => 'error'));
  }
  actualizar(cliente:any){
    localStorage.setItem("cliente",JSON.stringify(cliente));
    location.href="/actualizarclientes";
    }
  agregar(){
    
  }
}
