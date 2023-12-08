import { Injectable } from '@angular/core';
import { vetements } from '../model/vetements.model';
import { Type } from '../model/Type.model';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class vetementsService {
  apiURL: string = 'http://localhost:8080/vetements/api';
  vetements: vetements[]= [];
 /*  Type :Type[]; */
  constructor(private http : HttpClient) {
    /* this.Type=[ {idCat : 1, nomCat : "T-shirt"}, {idCat : 2, nomCat : "Robe"},{idCat : 3, nomCat : "Jacket"} ]; */
    /* this.vetements = [
    { idvetements: 1, nomvetements: "T-shirt : Calvin Klein", prixvetements: 100, couleur: "noir/rouge/blanc", disponible: "disponible", datevetements: new Date("01/14/2020"),Type : {idCat : 1, nomCat : "T-shirt" }},
    { idvetements: 2, nomvetements: "Robe : Zara", prixvetements: 499.999, couleur: "noir/rouge", disponible: "disponible", datevetements: new Date("12/17/2022"),Type : {idCat : 2, nomCat : "Robe"}},
    { idvetements: 3, nomvetements: "Jackets : The North Face", prixvetements: 150.500, couleur: "noir/bleu/blanc", disponible: "non-disponible", datevetements: new Date("02/20/2023"),Type : {idCat : 3, nomCat : "Jacket"}} ]; */
  }
  listevetements():Observable<vetements[]>{ 
    return this.http.get<vetements[]>(this.apiURL);
  }
  ajoutervetements(vet: vetements):Observable<vetements>{ 
    return this.http.post<vetements>(this.apiURL, vet, httpOptions); 
  }
  supprimervetements(id : number) { 
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions); }


  vetement! : vetements;
  consultervetements(id: number): Observable<vetements> { const url = `${this.apiURL}/${id}`; return this.http.get<vetements>(url); }
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
    updateProduit(prod :vetements) : Observable<vetements> { return this.http.put<vetements>(this.apiURL, prod, httpOptions); }
    listetype():Observable<Type[]>{ 
      return this.http.get<Type[]>(this.apiURL+"/type"); 
    }


  
    rechercherPartype(idCat: number):Observable< vetements[]> { const url = 
      `${this.apiURL}/vetscat/${idCat}`; 
      return this.http.get<vetements[]>(url); }

      rechercherParNom(nom: string):Observable< vetements[]> { 
        const url = `${this.apiURL}/vetsByName/${nom}`; 
        return this.http.get<vetements[]>(url); }
      
    }

     

