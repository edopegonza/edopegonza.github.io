import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalasComponent } from './salas/salas.component';
import { ReservasComponent } from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
import { SalaFormularioComponent } from './sala-formulario/sala-formulario.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
    { path: '', redirectTo: '/reservas', pathMatch: 'full' },
    { path: 'salas', component: SalasComponent, canActivate: [AuthGuard] },
    { path: 'salas/nueva', component: SalaFormularioComponent, canActivate: [AuthGuard] },
    { path: 'salas/editar/:id', component: SalaFormularioComponent, canActivate: [AuthGuard] },
    { path: 'reservas', component: ReservasComponent },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '/reservas' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
