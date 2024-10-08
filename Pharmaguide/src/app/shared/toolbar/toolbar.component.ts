import { Component, effect, HostListener, Input, OnDestroy, OnInit, signal, ViewChild, ViewEncapsulation, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';

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
export class ToolbarComponent implements OnInit, OnDestroy {

  innerWidth: number = 1051;

  loginFlag: boolean = false;

  subscription: Subscription[]= [];

  public sidenavFlag: boolean = false;
    
  @ViewChild(MatSidenav)sidenav!: MatSidenav;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.innerWidth = window.innerWidth;
    }
  
  constructor(private shareFlagsService: MainSharedService) {
    effect(()=> {
      this.loginFlag = this.shareFlagsService.getSidenavFlag();
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

}
