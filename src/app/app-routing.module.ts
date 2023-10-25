import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementsComponent } from './add-vetements/add-vetements.component';
import { UpdateVetementsComponent } from './update-vetements/update-vetements.component';

const routes: Routes = [
  {path: "vetements", component : VetementsComponent},
  {path: "add-vetements", component : AddVetementsComponent},
  {path: "updatevetements/:id", component: UpdateVetementsComponent},
  { path: "", redirectTo: "vetements", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
