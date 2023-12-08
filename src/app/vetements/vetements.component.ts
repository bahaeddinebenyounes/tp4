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
  vetements   : any;
  constructor(private vetementsService: vetementsService,
    public authService: AuthService ) {
    /* this.vetements = vetementsService.listevetements(); */
  /*console.log(this.vetements); */
  }
  
  ngOnInit():void{
     this.vetementsService.listevetements().subscribe(vets => 
      { console.log(vets); 
        for(let i of vets){
          console.log(i.type.nomCat)
        }
        this.vetements = vets; }); 


        
  }
  
  chargervetements(){ this.vetementsService.listevetements().subscribe(vet => { console.log(vet); this.vetements = vet; }); }
  supprimervetements(p: vetements) { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) this.vetementsService.supprimervetements(p.idvetements).subscribe(() => {
       console.log("vetements supprimé"); this.chargervetements(); }); 
      }
}


