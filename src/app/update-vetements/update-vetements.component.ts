import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vetementsService } from '../services/vetements.service';
import { vetements } from '../model/vetements.model';
import { Type } from '../model/Type.model';

@Component({
  selector: 'app-update-vetements',
  templateUrl: './update-vetements.component.html',
  styleUrls: ['./update-vetements.component.css']
})
export class UpdateVetementsComponent implements OnInit {
  currentvetements = new vetements();
  Type!: Type[];
  updatedCatId!: number;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private vetementsService: vetementsService) { }
  ngOnInit(): void {
    this.vetementsService.listetype(). subscribe(cats => {
      this.Type = cats; console.log(cats); });
      this.vetementsService.consultervetements(this.activatedRoute.snapshot.params['id']). subscribe( prod =>{ 
        this.currentvetements = prod; this.updatedCatId = this.currentvetements.type.idCat; } ) ;
  }
  updatevetements() {
    this.currentvetements.type = this.Type.
    find(cat => cat.idCat == this.updatedCatId)!; 
    this.vetementsService.updateProduit(this.currentvetements).subscribe(prod => { 
      this.router.navigate(['vetements']); } );
  } 
}
