import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizarpersonas',
  templateUrl: './actualizarpersonas.component.html',
  styleUrls: ['./actualizarpersonas.component.css']
})
export class ActualizarpersonasComponent implements OnInit {

  constructor() { }
  persona: any = {};
  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem("persona");
    location.href="/";
   }
   
}
