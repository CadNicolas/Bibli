import { Component, OnInit } from '@angular/core';
import { Prestamos } from 'src/app/interfaces/Prestamos';

@Component({
  selector: 'app-adm-prestamos',
  templateUrl: './adm-prestamos.component.html',
  styleUrls: ['./adm-prestamos.component.css']
})
export class AdmPrestamosComponent implements OnInit {
  pedidosRegistrados: Prestamos[] = [
    {
      isbn: 33455,
      usuario: 'Juan Perdomo',
      fechaPrestamo: '07-01-2022',
      fechaDevolucion: '08-01-2022'
    },
    {
      isbn: 33457,
      usuario: 'Edison Chalacan',
      fechaPrestamo: '08-05-2022',
      fechaDevolucion: '10-04-2022'
    },
    {
      isbn: 33458,
      usuario: 'Juan P',
      fechaPrestamo: '07-10-2022',
      fechaDevolucion: '08-10-2022'
    },
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
