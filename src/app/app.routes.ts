import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "projetos",
    component: ProjectsComponent
  },
  {
    path: "sobre",
    component: SobreComponent
  }
];
