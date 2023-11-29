import { Component } from '@angular/core';
import { vetements } from '../model/vetements.model';
import { vetementsService } from '../services/vetements.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent {
  vetements:vetements[]=[];
  allvetements:vetements[]=[];
  nomvetements!:String;
  searchTerm!:string;
  ngOnInit(): void {
    this.vetements = this.vetementsService.listevetements();
    this.allvetements=this.vetements;
    }
  constructor(private vetementsService:vetementsService){}
  onChange() {
    this.vetements = this.vetementsService.rechercherParNom(this.searchTerm);
    console.log('Filtered Vetements:', this.vetements);
  }
  onKeyUp(filterText : string){ this.vetements = this.vetements.filter(item => item.nomvetements.toLowerCase().includes(filterText)); }
  
}
