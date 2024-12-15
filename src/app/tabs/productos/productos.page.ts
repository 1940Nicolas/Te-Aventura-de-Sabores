import { Component, OnInit } from '@angular/core'; 
import { MenuController } from '@ionic/angular';  

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'] 
})
export class ProductosPage implements OnInit {

  constructor(private menu: MenuController) { }

  
  productos = [
    {
      nombre: 'Té de bolsa',
      precio: 2.500,
      imagen: '/assets/img/tes/15.jpg'
    },
    {
      nombre: 'Té de caja',
      precio: 1.200,
      imagen: '/assets/img/tes/1.jpg'
    },
    {
      nombre: 'Té de bolsa',
      precio: 2.500,
      imagen: '/assets/img/tes/14.jpg'
    },
    {
      nombre: 'Té de caja',
      precio: 1.200,
      imagen: '/assets/img/tes/2.jpg'
    },
    {
      nombre: 'Té de bolsa',
      precio: 2.500,
      imagen: '/assets/img/tes/13.jpg'
    },
    {
      nombre: 'Té de caja',
      precio: 1.200,
      imagen: '/assets/img/tes/3.jpg'
    },
    {
      nombre: 'Té de bolsa',
      precio: 2.500,
      imagen: '/assets/img/tes/12.jpg'
    }
   
  ];

  ngOnInit() {
    this.menu.close('mainMenu');
  }

}
