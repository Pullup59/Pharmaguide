import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
