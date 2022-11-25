import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menucliente',
  templateUrl: './menucliente.component.html',
  styleUrls: ['./menucliente.component.css']
})
export class MenuclienteComponent implements OnInit {
  persona:any = {};

  constructor() { }

  ngOnInit(): void {
    let temporal: string = localStorage.getItem('persona');
    if(temporal){
      this.persona=JSON.parse(temporal);
      console.log(this.persona)
    }
  }
  logout(){
    localStorage.removeItem("persona");
    location.href="/";
   }
}
