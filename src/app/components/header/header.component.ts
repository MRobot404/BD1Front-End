import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  signedIn:boolean= false;
  signedIn2:boolean= false;
  
  
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router:Router,private _ps: PropertyService,private _us: UserService) { }

  ngOnInit(): void {
  this.signedIn=JSON.parse(localStorage.getItem('estado1'));
  console.log(this.signedIn);
  this.signedIn2=JSON.parse(localStorage.getItem('estado2'));
  console.log(this.signedIn2);
  }
  logout(){
   
      localStorage.removeItem("persona");
      location.href="/";
 
  }
  
  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
  handleHome(){
    this._ps.propertySearchFilters.next({});
    this._ps.ownerPropClick.next({ownerProp:false})

  }
  handleAddNew(){
    this._ps.showOwnerProperties.next({show:true})
    this._ps.ownerPropClick.next({ownerProp:true})
  }

}
