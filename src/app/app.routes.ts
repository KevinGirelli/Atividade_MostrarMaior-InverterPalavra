import { Routes } from '@angular/router';
import { MostrarMaiorComponent } from './components/mostrar-maior/mostrar-maior.component';
import { InverterPalavraComponent } from './components/inverter-palavra/inverter-palavra.component';

export const routes: Routes = [
  {
    path: "maior",
    component: MostrarMaiorComponent
  },

  {
    path: "inverter",
    component: InverterPalavraComponent
  }
];
