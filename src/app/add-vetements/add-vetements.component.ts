import { Component } from '@angular/core';
import { vetements } from '../model/vetements.model';
import { vetementsService } from '../services/vetements.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-vetements',
  templateUrl: './add-vetements.component.html',
  styleUrls: ['./add-vetements.component.css']
})
export class AddVetementsComponent {
  newvetements = new vetements();
  message : string | undefined;
  categories! : Categorie[];
  newIdCat! : number; 
  newCategorie! : Categorie;
;
ngOnInit() {
  console.log(this.newvetements);
   this.categories = this.vetementsService.listeCategories(); }

  constructor(private vetementsService: vetementsService,private router:Router) {}
  addvetement(){ 
    console.log(this.newvetements);
    this.newCategorie = this.vetementsService.consulterCategorie(this.newIdCat);
     this.newvetements.categorie = this.newCategorie; 
     this.vetementsService.ajoutervetements(this.newvetements); 
     this.router.navigate(['vetements']); }
  }
  
 
