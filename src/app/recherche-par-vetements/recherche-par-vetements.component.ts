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
type:Type[];
types:Type[];
ngOnInit(): void {
  this.vetementsService.listetype().subscribe(cats => {
    this.type = cats; 
    console.log(cats);
  });
}

constructor(private vetementsService:vetementsService){}
onChange() {
  this.vetementsService.rechercherPartype(this.IdCat).subscribe(prods =>{this.vetements=prods});
}
}
