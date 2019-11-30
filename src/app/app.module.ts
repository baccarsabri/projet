import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ProduitsComponent } from './produits/produits.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { PipePipe } from './pipe.pipe';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ProduitsComponent,
    ContactComponent,
    MenuComponent,
    ListproduitComponent,
    PipePipe,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
