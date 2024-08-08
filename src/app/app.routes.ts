import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { ReporteComponent } from './components/report/report.component';

    




export const routes: Routes = [

    {path: 'login', component : LoginComponent},
    {path: 'registro', component : RegistroComponent},
    {path: '""', component : HomeComponent},
    {path: 'noticia', component : NoticiaComponent},
    {path: 'ingreso', component : IngresoComponent},
    {path: 'report', component : ReporteComponent},
    {path: '**' , redirectTo: '/login', pathMatch: 'full'}
];
