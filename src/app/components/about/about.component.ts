import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public subtitle2: string;
  public email: string;


  constructor() {
    this.title = "Nicolás Pérez";
    this.subtitle = "Desarrollador web y Analista BI";
    this.subtitle2 = "(En Formación)";
    this.email = "n.perezbus@gmail.com";

  }
    

  ngOnInit() {
  }

}
