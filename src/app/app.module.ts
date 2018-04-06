import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { NavComponent } from './immobilier/nav/nav.component';
import { CatalogueComponent } from './immobilier/catalogue/catalogue.component';
import { RechercheComponent } from './immobilier/recherche/recherche.component';




@NgModule({
  declarations: [
    AppComponent,
    ImmobilierComponent,
    NavComponent,
    CatalogueComponent,
    RechercheComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
