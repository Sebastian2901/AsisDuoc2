import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  valor = '';
  constructor(private router: Router) { }

  ngOnInit() {

  }

  continuar() {
    this.router.navigate(['/pagina3',this.valor]);
  }

    

}