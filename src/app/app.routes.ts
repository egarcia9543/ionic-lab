import { Routes } from '@angular/router';
import { AdministrarServiciosComponent } from './pages/administrar-servicios/administrar-servicios.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleServicioComponent } from './pages/detalle-servicio/detalle-servicio.component';
import { LoginPage } from './pages/login/login.page';
import { RegistroPage } from './pages/registro/registro.page';
import { DetallePedidosComponent } from './pages/detalle-pedidos/detalle-pedidos.component'

export const routes: Routes = [
  {
    path: '',
    component: BienvenidaComponent
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'registro',
    component: RegistroPage
  },
  {
    path: 'servicios',
    component: CatalogoComponent
  },
  {
    path: 'detalles-servicio/:id',
    component: DetalleServicioComponent
  },
  {
    path: 'administrar',
    component: AdministrarServiciosComponent
  },
  {
    path: 'pedidos',
    component: DetallePedidosComponent
  },
  {
    path: 'pedidos/detalle/:id',
    component: AdministrarServiciosComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
