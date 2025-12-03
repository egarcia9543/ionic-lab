import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule,  } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Pedido {
  id: number;
  nombre: string;
  servicio: string;
  fecha: string;
  hora: string;
}



@Component({
  selector: 'app-administrar-servicios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './administrar-servicios.component.html',
  styleUrls: ['./administrar-servicios.component.scss'],
})


export class AdministrarServiciosComponent  implements OnInit {

 pedidoId!: number; 
   pedidos = [
    {
      id: 1,
      nombre: "Laura Rodríguez",
      servicio: "Limpieza de alfombra",
      fecha: "05 Nov 2025",
      hora: "10:00 a.m.",
      estadoPago: "Pendiente de pago",
      direccion: "Calle 45 #12-36, Bogotá",
      formaPago: "Transferencia bancaria"
    },
    {
      id: 2,
      nombre: "Carlos Gómez",
      servicio: "Limpieza general hogar",
      fecha: "06 Nov 2025",
      hora: "2:30 p.m.",
      estadoPago: "Pagado",
      direccion: "Carrera 10 #20-15, Bogotá",
      formaPago: "Nequi"
    },
    {
      id: 3,
      nombre: "Mariana Ruiz",
      servicio: "Limpieza de oficinas",
      fecha: "07 Nov 2025",
      hora: "9:00 a.m.",
      estadoPago: "Pendiente de pago",
      direccion: "Av. 68 #30-70, Bogotá",
      formaPago: "Efectivo"
    },
    {
      id: 4,
      nombre: "Juan Noguera",
      servicio: "Limpieza de oficinas",
      fecha: "08 Nov 2025",
      hora: "11:00 a.m.",
      estadoPago: "Pagadp",
      direccion: "Av. 60 #40-72, Bogotá",
      formaPago: "PSE"
    }
  ];

  pedido: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pedidoId = Number(this.route.snapshot.paramMap.get('id'));
    this.pedido = this.pedidos.find(p => p.id === this.pedidoId);
  }

}
