import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: any;

  constructor(private sanitize: DomSanitizer) {
    this.url = sanitize.bypassSecurityTrustResourceUrl('https://teste-cruzada.herokuapp.com/');
  }

}
