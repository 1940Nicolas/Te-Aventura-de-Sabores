import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage  {

  constructor() { }

  images: string[] = [
    '/assets/img/tes/1.jpg',
    '/assets/img/tes/2.jpg',
    '/assets/img/tes/3.jpg',
    '/assets/img/tes/4.jpg',
    '/assets/img/tes/5.jpg',
    '/assets/img/tes/6.jpg',
    '/assets/img/tes/7.jpg',
    '/assets/img/tes/8.jpg',
    '/assets/img/tes/9.jpg',
    '/assets/img/tes/10.jpg',
    '/assets/img/tes/11.jpg',
    '/assets/img/tes/12.jpg',
    '/assets/img/tes/13.jpg',
    '/assets/img/tes/14.jpg',
    '/assets/img/tes/15.jpg',
    
  ];

}
