import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pedidos',
  templateUrl: './detalle-pedidos.component.html',
  styleUrls: ['./detalle-pedidos.component.scss'],
})
export class DetallePedidosComponent  implements OnInit {
private router = inject(Router);

  constructor() { }

  ngOnInit() {}

    detallePedido() {
    this.router.navigate(['/administrar']);
  }
  
  

}