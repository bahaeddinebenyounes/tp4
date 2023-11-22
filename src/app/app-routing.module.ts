import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementsComponent } from './add-vetements/add-vetements.component';
import { UpdateVetementsComponent } from './update-vetements/update-vetements.component';
import { LoginComponent } from './login/login.component';
import { ProduitGuard } from './services/produit.guard';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';

const routes: Routes = [
  {path: "vetements", component : VetementsComponent},
  {path: "add-vetements", component : AddVetementsComponent,canActivate:[ProduitGuard]},
  {path: "updatevetements/:id", component: UpdateVetementsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "vetements", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
