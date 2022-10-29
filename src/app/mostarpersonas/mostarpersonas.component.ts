import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostarpersonas',
  templateUrl: './mostarpersonas.component.html',
  styleUrls: ['./mostarpersonas.component.css']
})
export class MostarpersonasComponent implements OnInit {
  personas: any = [];
  cargar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
