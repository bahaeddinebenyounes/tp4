import { Component } from '@angular/core';
import { Type } from '../model/Type.model';
import { vetementsService } from '../services/vetements.service';
import { vetements } from '../model/vetements.model';

@Component({
  selector: 'app-recherche-par-vetements',
  templateUrl: './recherche-par-vetements.component.html',
  styleUrls: ['./recherche-par-vetements.component.css']
})
export class RechercheParVetementsComponent {
vetements:vetements[]=[];
IdCat!:number;
Type:Type[]=[];
ngOnInit(): void {
  this.Type = this.vetementsService.listeType();
  }
constructor(private vetementsService:vetementsService){}
onChange() {
  console.log('Selected Type ID:', this.IdCat);

  // Call the service to filter vetements based on the selected Type
  this.vetements = this.vetementsService.rechercherParType(this.IdCat);

  // Debugging statement
  console.log('Filtered Vetements:', this.vetements);
}
}
