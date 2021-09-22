import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './layout/cabecera/cabecera.component';
import { PieComponent } from './layout/pie/pie.component';
import { HomeComponent } from './home/home.component';
import { TransaccionesService } from './data/transacciones.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [TransaccionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
