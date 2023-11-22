import { Component } from '@angular/core';
import { vetements } from '../model/vetements.model';
import { vetementsService } from '../services/vetements.service';
import { Router } from '@angular/router';
import { Type } from '../model/Type.model';

@Component({
  selector: 'app-add-vetements',
  templateUrl: './add-vetements.component.html',
  styleUrls: ['./add-vetements.component.css']
})
export class AddVetementsComponent {
  newvetements = new vetements();
  message : string | undefined;
  Type! : Type[];
  newIdCat! : number; 
  newType! : Type;
;
ngOnInit() {
  console.log(this.newvetements);
   this.Type = this.vetementsService.listeType(); }

  constructor(private vetementsService: vetementsService,private router:Router) {}
  addvetement(){ 
    console.log(this.newvetements);
    this.newType = this.vetementsService.consulterType(this.newIdCat);
     this.newvetements.Type = this.newType; 
     this.vetementsService.ajoutervetements(this.newvetements); 
     this.router.navigate(['vetements']); }
  }
  
 
