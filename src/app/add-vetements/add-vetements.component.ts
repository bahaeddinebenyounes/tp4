import { Component } from '@angular/core';
import { vetements } from '../model/vetements.model';
import { vetementsService } from '../services/vetements.service';

@Component({
  selector: 'app-add-vetements',
  templateUrl: './add-vetements.component.html',
  styleUrls: ['./add-vetements.component.css']
})
export class AddVetementsComponent {
  newvetements = new vetements();
  message : string | undefined;;

  constructor(private vetementsService: vetementsService ) {}
  addvetement(){ 
    console.log(this.newvetements);
    this.vetementsService.ajoutervetements(this.newvetements);
    this.message = "produit " + this.newvetements.nomvetements +"ajouter avec succés"
  }
}
