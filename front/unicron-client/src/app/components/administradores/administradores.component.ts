import { Component, OnInit } from '@angular/core';
import { UcronServicesService } from 'src/app/services/ucron-services.service';

@Component({
  selector: 'app-administradores',
  templateUrl: './administradores.component.html',
  styleUrls: ['./administradores.component.css']
})
export class AdministradoresComponent implements OnInit {

  constructor(private service: UcronServicesService) { }

  administradores = [];

  ngOnInit(): void {
    this.getAdministradores();
  }

  getAdministradores() {
    this.service.getAdministradores().subscribe(
      (result: any) => {
        this.administradores = result['ans'];
      }
    );
  }

}
