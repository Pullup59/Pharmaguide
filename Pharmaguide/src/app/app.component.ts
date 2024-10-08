import { Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MainSharedService } from './shared/service/main-shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  $subscribtions: Subscription[] = [];

  constructor(private router: Router, private shareFlagsService: MainSharedService) {}

  ngOnInit() {
    this.$subscribtions.push();
  }

  ngOnDestroy() {
    this.$subscribtions.forEach(sub => sub.unsubscribe());
  }
}
