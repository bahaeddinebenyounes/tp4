import { Categorie } from "./categorie.model";

export class vetements 
{
    idvetements!  : number;
    nomvetements!  : string;
    couleur!       : string;
    prixvetements! : number; 
    datevetements! : Date ;
    disponible!    : string;
    categorie!     :Categorie;
  }