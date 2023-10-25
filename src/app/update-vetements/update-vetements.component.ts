import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { vetementsService } from '../services/vetements.service';
import { vetements } from '../model/vetements.model';

@Component({
  selector: 'app-update-vetements',
  templateUrl: './update-vetements.component.html',
  styleUrls: ['./update-vetements.component.css']
})
export class UpdateVetementsComponent implements OnInit {
  currentvetements = new vetements(); 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router, 
    private vetementsService: vetementsService) {} 
    ngOnInit(): void {
      // console.log(this.route.snapshot.params.id); 
      this.currentvetements = this.vetementsService.consultervetements(this.activatedRoute.snapshot. params['id']); 
      console.log(this.currentvetements); 
    }
     updatevetements() { 
      console.log(this.currentvetements);
      this.vetementsService.updatevetements(this.currentvetements); 
      this.router.navigate(["vetements"]);
    }
}
