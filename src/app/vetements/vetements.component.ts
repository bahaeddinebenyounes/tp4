import { Component } from '@angular/core';
import { vetements } from '../model/vetements.model';
import { vetementsService } from '../services/vetements.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class VetementsComponent {
  vetements   : vetements[];
  constructor(private vetementsService: vetementsService,
    public authService: AuthService) {
    this.vetements = vetementsService.listevetements();
  console.log(this.vetements);
  }
  supprimervetements(p: vetements) {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.vetementsService.supprimervetements(p);
  }
}


