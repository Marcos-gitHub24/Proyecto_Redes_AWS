import { Component, OnInit } from '@angular/core';
import { UcronServicesService } from 'src/app/services/ucron-services.service';

@Component({
  selector: 'app-desarrolladores',
  templateUrl: './desarrolladores.component.html',
  styleUrls: ['./desarrolladores.component.css']
})
export class DesarrolladoresComponent implements OnInit {

  constructor(private service: UcronServicesService) { }

  desarrolladores = []

  ngOnInit(): void {
    console.log('oninit')
    this.getDesarrolladores();
  }

  getDesarrolladores() {
    this.service.getDesarrolladores().subscribe(
      (result: any) => {
        this.desarrolladores = result['ans'];
      }
    );
  }

}
