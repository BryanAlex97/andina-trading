import { Routes } from '@angular/router';
import { InversionistasComponent } from './components/inversionistas/inversionistas.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistroComponent } from './components/registro/registro.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { FinanciadorComponent } from './components/financiador/financiador.component';
import { InversorComponent } from './components/inversor/inversor.component';
import { AndinaTradingComponent } from './components/andinatrading/andinatrading.component';
import { MercadoComponent } from './components/mercado/mercado.component';
import { ComisionistasComponent } from './components/comisionistas/comisionistas.component';
import { ContratoComponent } from './components/contrato/contrato.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { PaisesComponent } from './components/paises/paises.component';
import { MisnversionesComponent } from './components/mis-inversiones/mis-inversiones.component';


export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicio-de-sesion', component: InicioDeSesionComponent },
  { path: 'financiador', component: FinanciadorComponent },
  { path: 'inversor', component: InversorComponent },
  { path: 'andinatrading', component: AndinaTradingComponent },
  { path: 'mercado', component: MercadoComponent },
  { path: 'inversionistas', component: InversionistasComponent },
  { path: 'comisionistas', component: ComisionistasComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'mis-inversiones', component: MisnversionesComponent },
  { path: 'contratos', component: ContratoComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'paises', component: PaisesComponent },
  { path: '**', redirectTo: '/inicio' }
];
