import { Component, OnInit } from '@angular/core';
import { Produits } from '../service.service';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
  providers: [ServiceService],
})
export class ProduitsComponent implements OnInit {
pc:any[];
imprimante:any[];
clavier:any[];
  constructor(private Service:ServiceService,private Service1:ServiceService,private Service2:ServiceService) { }
  ngOnInit() {
  this.pc = this.Service.pc;
  this.imprimante= this.Service1.imprimante;
  this.clavier= this.Service2.clavier;
  }
    
    
 
  d1=new Date ("2019-1");
  d2=new Date ("2018-4");
  d3=new Date ("2017-7");
  d4=new Date ("2020-9");
  d5=new Date ("2015-7");
  d6=new Date ("2019-5");
  d7=new Date ("2019-10");
  


}




