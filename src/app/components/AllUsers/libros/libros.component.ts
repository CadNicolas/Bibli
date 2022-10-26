import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/Libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  librosRegistrados: Libro [] =[
    {
      isbn:2131,
      titulo:'El corazón de la piedra',
      autor:'José María García López',
      editorial:'Nocturna',
      fechaPublicacion:''
    },
    {
      isbn:2334,
      titulo:'Selva de hormigón y lagartos',
      autor:'Maximiliano Rodríguez Vecino',
      editorial:'Amarante',
      fechaPublicacion:''
      
    },
    {
      isbn:2233,
      titulo:'La polifonía clásica',
      autor:'Samuel Rubio',
      editorial:'Real Monasterio de El Escorial',
      fechaPublicacion:''
      
    },
    {
      isbn:4433,
      titulo:'Las tres tentaciones',
      autor:'José Ramón Villaverde',
      editorial:'Amarante',
      fechaPublicacion:''
    },
    {
      isbn:3332,
      titulo:'El canto gregoriano',
      autor:' Juan Carlos Asensio',
      editorial:'Alianza Música',
      fechaPublicacion:''
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
