import { Component, OnInit } from '@angular/core';
import { CabinetMedecinService} from 'src/app/cabinet-medecin.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
listePatients:any=[]
  constructor(
                private serv: CabinetMedecinService,
                private route:Router,
  ) { 
    this.serv.getListePatients().subscribe(
      (data)=>{
        this.listePatients=data;
        console.log(this.listePatients);
      },(err)=>{}
    )
  }

  ngOnInit(): void {
  }

  EditerPati(){

  }

}
