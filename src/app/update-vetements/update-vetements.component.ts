import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { vetementsService } from '../services/vetements.service';
import { vetements } from '../model/vetements.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-vetements',
  templateUrl: './update-vetements.component.html',
  styleUrls: ['./update-vetements.component.css']
})
export class UpdateVetementsComponent implements OnInit {
  currentvetements = new vetements();
  categories!: Categorie[];
  updatedCatId!: number;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private vetementsService: vetementsService) { }
  ngOnInit(): void {
    this.categories = this.vetementsService.listeCategories(); 
    this.currentvetements = this.vetementsService.consultervetements(this.activatedRoute.snapshot.params['id']); 
    this.updatedCatId = this.currentvetements.categorie.idCat;
  }
  updatevetements() {
    this.currentvetements.categorie=this.vetementsService.consulterCategorie(this.updatedCatId); this.vetementsService.updatevetements(this.currentvetements); this.router.navigate(['vetements']);
  }
}
