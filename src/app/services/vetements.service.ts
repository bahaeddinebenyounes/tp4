import { Injectable } from '@angular/core';
import { vetements } from '../model/vetements.model';

@Injectable({
  providedIn: 'root'
})
export class vetementsService {
  vetements: vetements[];
  constructor() {
    this.vetements = [
    { idvetements: 1, nomvetements: "T-shirt : Calvin Klein", prixvetements: 100, couleur: "noir/rouge/blanc", disponible: "disponible", datevetements: new Date("01/14/2020") },
    { idvetements: 2, nomvetements: "Robe : Zara", prixvetements: 499.999, couleur: "noir/rouge", disponible: "disponible", datevetements: new Date("12/17/2022") },
    { idvetements: 3, nomvetements: "Jackets : The North Face", prixvetements: 150.500, couleur: "noir/bleu/blanc", disponible: "non-disponible", datevetements: new Date("02/20/2023") }];
  }
  listevetements(): vetements[] { return this.vetements; }
  ajoutervetements(prod: vetements) { this.vetements.push(prod); }
  supprimervetements(prod: vetements) {
    //supprimer le produit prod du tableau produits
    const index = this.vetements.indexOf(prod, 0);
    if (index > -1) {
      this.vetements.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
  }
  vetement! : vetements;
  consultervetements(id:number): vetements{
    return this.vetements.find(p => p.idvetements == id)!; 
   }
   triervetements(){ 
    this.vetements = this.vetements.sort((n1,n2) => {
      let x1=n1.idvetements;
      let x2=n2.idvetements;
       if (x1 > x2) { 
        return 1;
      } 
       if (n1.idvetements < n2.idvetements) { 
        return -1; 
      } 
      return 0; 
    }); 
    } 
    updatevetements(p:vetements) { 
      // console.log(p); 
      this.supprimervetements(p); 
      this.ajoutervetements(p); 
      this.triervetements(); 
    }

}