import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina4',
  templateUrl: './pagina4.page.html',
  styleUrls: ['./pagina4.page.scss'],
})
export class Pagina4Page implements OnInit {
  argumento = null;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.argumento = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
