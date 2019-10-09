import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-clases',
  templateUrl: './ng-clases.component.html',
  styleUrls: ['./ng-clases.component.css']
})
export class NgClasesComponent implements OnInit {

  alerta: string = 'alert-danger';
  loading: boolean = false;

  propedades = {
      danger: false
  };

  constructor() { }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000 );
  }

}
