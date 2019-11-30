import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class ServiceService {

  constructor() { }
  pc= new Array ( new Produits("Pc Portable",2100,"asus",true,"../assets/img1.jpg","AA1000",new Date ("2018-4")),
  new Produits("Pc Portable",1900,"acer",true,"../assets/img2.jpg",'AB1000',new Date ("2017-")), 
  new Produits("Pc Portable",1400,"hp",true,"../assets/img3.jpg","AC1000",new Date ("2014-5")));
   imprimante= new Array (new Produits("Imprimantes",900,"hp",true,"../assets/img4.jpg","AD1000",new Date ("2017-9")),
   new Produits("Imprimantes",900,"acer",true,"../assets/img5.jpg","AE1000",new Date ("2019-1")));
   clavier= new Array (new Produits("Clavier",100,"acer",true,"../assets/img6.jpg","AF1000",new Date ("2019-1")),
   new Produits("Clavier",120,"ASUS",true,"../assets/img7.jpg","AG1000",new Date ("2019-7")));


   tab= new Array ( new Produits("Pc Portable",2100,"asus",true,"../assets/img1.jpg","AA1000",new Date ("2018-4")),
   new Produits("Pc Portable",1900,"acer",true,"../assets/img2.jpg",'AB1000',new Date ("2017-")), 
   new Produits("Pc Portable",1400,"hp",true,"../assets/img3.jpg","AC1000",new Date ("2014-5")),
     new Produits("Imprimantes",900,"hp",true,"../assets/img4.jpg","AD1000",new Date ("2017-9")),
    new Produits("Imprimantes",900,"acer",false,"../assets/img5.jpg","AE1000",new Date ("2019-1")),
      new Produits("Clavier",100,"acer",true,"../assets/img6.jpg","AF1000",new Date ("2019-1")),
    new Produits("Clavier",120,"ASUS",true,"../assets/img7.jpg","AG1000",new Date ("2019-7")));
   detail(id:string):number{
     var i:number=0;
     while ((i<5) && (id!=this.tab[i].identifiant)){
       i++;
     }
    
       return i;
     }
     ajouter(p:Produits)
{ this.tab.push(p);
 }
}
   
  

export class Produits
{
constructor(private _nom:string, private _prix: number,
   private _marque:string, private _diponibilité:boolean,
   private _image:string,private _identifiant:String,private _date:Date)
   {}  
    

public get nom(): string {
return this._nom;
}
public set nom(value: string) {
this._nom = value;
}
public get prix(): number {
return this._prix;
}
public set prix(value: number) {
this._prix = value;
}
public get marque(): string {
  return this._marque;
  }
public get identifiant(){
return this._identifiant;
}

}
