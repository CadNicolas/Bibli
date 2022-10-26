import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/interfaces/Usuarios';

@Component({
  selector: 'app-adm-usuarios',
  templateUrl: './adm-usuarios.component.html',
  styleUrls: ['./adm-usuarios.component.css']
})
export class AdmUsuariosComponent implements OnInit {
  usuariosRegistrados: Usuarios [] = [
    {
      cc:1234,
      nombre:'ADRIANA',
      apellido:'HERNANDEZ',
      direccion:'IPIALES',
      email:'andri01@gmail.com',
      telefono:3161234562,
      password:'adria123',
      user:'adrianah'
    },
    {
      cc:2345,
      nombre:'DANIELA',
      apellido:'NIETO',
      direccion:'IPIALES',
      email:'danielan@gmail.com',
      telefono:3171234456,
      password:'12345',
      user:'danielan'
    },
    {
      cc:3455,
      nombre:'OSCAR',
      apellido:'BARRERO',
      direccion:'IPIALES',
      email:'oscarb@gmail.com',
      telefono:3162338128,
      password:'1234',
      user:'oscar1'
    },
    {
      cc:4433,
      nombre:'MARIO',
      apellido:'PEREZ',
      direccion:'IPIALES',
      email:'mariop@gmail.com',
      telefono:3112378128,
      password:'1234567',
      user:'mariop'
    },
    {
      cc:5534,
      nombre:'JULIAN',
      apellido:'DIAZ',
      direccion:'IPIALES',
      email:'juliand@gmail.com',
      telefono:3102312328,
      password:'123423',
      user:'juliand'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
