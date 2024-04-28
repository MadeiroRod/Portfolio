import { Component } from '@angular/core';
import { ProjetosComponent } from '../../components/projetos/projetos.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjetosComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
