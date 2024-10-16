import { Component, effect, HostListener, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MainSharedService } from '../service/main-shared.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatSidenavModule,
    CommonModule
],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnDestroy {

  innerWidth: number = 1051;

  loginFlag: boolean = false;

  buttonSidenavFlag: boolean = false;

  $subscription: Subscription[]= [];

  public sidenavFlag: boolean = false;

  @ViewChild(MatSidenav)sidenav!: MatSidenav;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.innerWidth = window.innerWidth;
    }

  constructor(private router: Router ,private shareFlagsService: MainSharedService) {
    effect(()=> {
      this.loginFlag = this.shareFlagsService.getSidenavFlag();
      if (this.loginFlag) this.sidenav.open;
    });
    this.$subscription.push(
      router.events.subscribe((val) => {
        val instanceof NavigationEnd && !val.url.startsWith("/app") ? this.closeSidenav() : this.openSidenav();
      }
    ));
  }

  ngOnDestroy(): void {
    this.$subscription.forEach(sub => sub.unsubscribe());
  }

  toggleSidenav() {
    this.sidenav.toggle();
    this.buttonSidenavFlag = !this.buttonSidenavFlag;
  }

  closeSidenav() {
    this.sidenav.close();
  }

  openSidenav() {
    this.sidenav.open();
  }

}
