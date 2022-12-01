import { Component, OnInit } from '@angular/core';
import { UcronServicesService } from 'src/app/services/ucron-services.service';

@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrls: ['./funcion.component.css']
})
export class FuncionComponent implements OnInit {

  constructor(private service: UcronServicesService) { }

  funciones = []
  noticiaInicial: any
  noticias = []

  ngOnInit(): void {
    this.getFuncion();
  }

  getFuncion() {
    this.service.getFuncion().subscribe(
      (result: any) => {
        this.funciones = result['funciones'];
        this.noticiaInicial = result['noticias'][0]
        this.noticias = result['noticias'].slice(1);
      }
    );
  }

}
