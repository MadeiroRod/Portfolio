import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    LogoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
