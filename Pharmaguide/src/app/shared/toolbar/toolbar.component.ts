import { Component, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatSidenavModule
],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent {
  
  @ViewChild(MatSidenav)sidenav!: MatSidenav;

  @Input() isLogged: boolean = false;

  public innerWidth: number = 1051;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  
  constructor(private router: Router) {

  }
  
}
