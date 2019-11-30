import { Component, OnInit } from '@angular/core';
import { Produits, ServiceService } from '../service.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
  providers: [ServiceService]
})
export class AcceuilComponent implements OnInit {
identifiant:string;
prix:number;
marque:string;
date:Date;
nom:string;
t:Produits[];

  constructor(private Service:ServiceService) { }
  ngOnInit() {
  this.t= this.Service.tab;
  }
  prod=new Produits(this.nom,this.prix,this.marque,true,"#",this.identifiant,this.date);
  ajout(p:Produits)
{
this.Service.ajouter(p);
}
  

}
