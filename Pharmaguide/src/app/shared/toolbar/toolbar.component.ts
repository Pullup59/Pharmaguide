import { Component, HostListener, Input, OnDestroy, signal, ViewChild, ViewEncapsulation, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MainSharedService } from '../service/main-shared.service';
import { Subscription } from 'rxjs';

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
export class ToolbarComponent implements OnDestroy {
    
  @ViewChild(MatSidenav)sidenav!: MatSidenav;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.innerWidth = window.innerWidth;
    }

  isLoggedd: boolean = false;

  innerWidth: number = 1051;

  private subscription: Subscription[]= [];

  isLogged = signal<boolean>(false);
  
  constructor(private router: Router, private shareFlagsService: MainSharedService) {
  }

  ngOnint() {
    this.isLogged = signal(this.shareFlagsService.getTodos() === "true");
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

}
