import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.page.html',
  styleUrls: ['./prueba1.page.scss'],
})
export class Prueba1Page implements OnInit {

  valor = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  continuar() {
    this.router.navigate(['/pagina3',this.valor]);
  }


}
