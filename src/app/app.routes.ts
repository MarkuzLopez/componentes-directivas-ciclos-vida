import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';
// import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo/usuario-nuevo.component';
// import { UsuarioEditarComponent } from './components/usuario/usuario-editar/usuario-editar.component';
// import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle/usuario-detalle.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    // { path: 'usuario',  component: UsuarioComponent },
    {
        path: 'usuario/:id',
        /* agregar rutas hijas por medio de la propiedad children,
          asi como agregar uno por defecto al ver el componente usuario por medio de:
          { path: '**', pathMatch: 'full', redirectTo: 'nuevo'}
         */
        component: UsuarioComponent,
        children: USUARIO_ROUTES
       /* children: [
            { path: 'nuevo', component: UsuarioNuevoComponent },
            { path: 'editar', component: UsuarioEditarComponent },
            { path: 'detalle', component: UsuarioDetalleComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'detalle'}
        ] */
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
