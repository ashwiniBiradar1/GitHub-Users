import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

import 'rxjs/add/operator/map';
@Component({
  selector: 'app-gitt',
  templateUrl: './gitt.component.html',
  styleUrls: ['./gitt.component.css']
})
export class GittComponent implements OnInit {
flagg;
data;
respString;
id;
  constructor(private serv : ServiceService) { }

  ngOnInit() {
  }
  getUserDetails(name)
  {
    this.serv.updateUser(name);
     this.data=this.serv.getDetails();
     this.respString = JSON.stringify(this.data);
     
     
  

}
}
