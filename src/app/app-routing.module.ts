import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';



const routes:Routes =[
  {path:'accueil', component:AcceuilComponent},
  {path:'produits', component:ProduitsComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'produits/:identifiant', component:DetailComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
