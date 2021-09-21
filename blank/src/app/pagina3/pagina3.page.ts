import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
  argumento = null;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}
  
  ngOnInit(){
    this.argumento = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
