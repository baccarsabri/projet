import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceService, Produits} from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ServiceService]
})
export class DetailComponent implements OnInit {
  identifiant:string;

  
t:Produits[];

  constructor(private activatedRoute:ActivatedRoute,private Service:ServiceService) { }
  ngOnInit() {
  this.identifiant= this.activatedRoute.snapshot.params['identifiant'];
  this.t= this.Service.tab;
  }
  id:string;
  detaill(id:string):any
{
this.Service.detail(id);
}
a:number=this.Service.detail(this.identifiant);
afficher(){
  console.log(this.a);
}
tab(){
  for (let j=0;j<7;j++){
    console.log(this.t[j]);
  }
}
}

