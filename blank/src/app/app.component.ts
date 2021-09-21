import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  argumento = null;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.argumento = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
