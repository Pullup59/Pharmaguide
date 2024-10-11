import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { MainSharedService } from '../service/main-shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterOutlet, 
    RouterModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginFlag: boolean = false;

  constructor(private router: Router, public mainSharedService: MainSharedService) {

  }

  ngOnInit() {
  }

  login() {
    this.mainSharedService.enable();
  }
}
