import { Component, OnInit } from '@angular/core';
import { MainSharedService } from '../../shared/service/main-shared.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent  implements OnInit {
  

  constructor(public mainSharedService: MainSharedService) { }

  ngOnInit() {
    this.mainSharedService.disable();
  }

}