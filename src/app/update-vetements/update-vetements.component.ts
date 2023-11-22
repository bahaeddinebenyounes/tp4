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
    this.Type = this.vetementsService.listeType(); 
    this.currentvetements = this.vetementsService.consultervetements(this.activatedRoute.snapshot.params['id']); 
    this.updatedCatId = this.currentvetements.Type.idCat;
  }
  updatevetements() {
    this.currentvetements.Type=this.vetementsService.consulterType(this.updatedCatId); this.vetementsService.updatevetements(this.currentvetements); this.router.navigate(['vetements']);
  }
}
