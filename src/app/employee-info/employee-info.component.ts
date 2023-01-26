import { Component, OnInit } from '@angular/core';
import { RecordsService } from "../records.service"

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit  {

  infoReceived1: string[]=[];

  infoReceived2: string[]=[];

  infoReceived3: string[]=[]; 

  constructor(private rservice: RecordsService) { }

  ngOnInit(): void { }

  getInfoFromService1(){

    this.infoReceived1 = this.rservice.getInfo1()

  }

  getInfoFromService2(){

    this.infoReceived2 = this.rservice.getInfo2()

  }

  getInfoFromService3(){

    this.infoReceived3 = this.rservice.getInfo3()

  }

}
