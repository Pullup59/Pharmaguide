import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainSharedService } from '../../shared/service/main-shared.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainViewComponent implements OnInit {

  constructor( public mainSharedService: MainSharedService) { }

  ngOnInit() {
    this.mainSharedService.disable();
  }
}
