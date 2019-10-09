import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(paramtrPadre => {
      console.log('Parametro Padare');
      console.log(paramtrPadre);
    });
   }

  ngOnInit() {
  }

}
