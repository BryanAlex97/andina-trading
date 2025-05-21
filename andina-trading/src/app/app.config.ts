import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InversionistasComponent } from './components/inversionistas/inversionistas.component';
// Agrega aquí otros componentes standalone si es necesario

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient()
  ]
};

