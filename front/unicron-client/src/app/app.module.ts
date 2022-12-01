import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { DesarrolloComponent } from './components/desarrollo/desarrollo.component';
import { AdministradoresComponent } from './components/administradores/administradores.component';
import { DesarrolladoresComponent } from './components/desarrolladores/desarrolladores.component';
import { FuncionComponent } from './components/funcion/funcion.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DesarrolloComponent,
    AdministradoresComponent,
    DesarrolladoresComponent,
    FuncionComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'administradores', component: AdministradoresComponent},
      {path: 'desarrolladores', component: DesarrolladoresComponent},
      {path: 'funcion-publica', component: FuncionComponent},
      {path: 'desarrollo-economico', component: DesarrolloComponent},
      {path: '**', redirectTo: '/', pathMatch: 'full'},
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
