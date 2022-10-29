import { Component, OnInit,Input } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	persona: any = {};

  
	constructor() { }
  
	ngOnInit(): void {
	  
	}
  
	logout(){
   localStorage.removeItem("persona");
   location.href="/";
	}
	

}
