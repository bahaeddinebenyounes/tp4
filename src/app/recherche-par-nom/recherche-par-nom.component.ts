import { Component, OnInit } from '@angular/core';
import { vetements } from '../model/vetements.model';
import { vetementsService } from '../services/vetements.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  vetements:vetements[]=[];
  allvetements:vetements[]=[];
  nomvetements!:string;
  searchTerm!:string;
  ngOnInit(): void {
    this.vetementsService.listevetements().subscribe(prods => { console.log(prods); this.allvetements = prods; });
    }
  constructor(private vetementsService:vetementsService){}
  rechercherProds(){ this.vetementsService.rechercherParNom(this.nomvetements).subscribe(prods => { this.vetements = prods; console.log(prods)}); }
  onKeyUp(filterText : string){ this.vetements = this.allvetements.filter(item => item.nomvetements.toLowerCase().includes(filterText)); }  
}
