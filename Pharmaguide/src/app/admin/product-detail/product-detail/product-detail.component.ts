import { Component, ViewEncapsulation } from '@angular/core';
import { AdviceService } from '../../../service/advice-service/advice.service';
import { ActivatedRoute } from '@angular/router';
import { Advice } from '../../../model/advice/advice.model';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent {

  adviceData: Advice[] = [];

  subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute, public adviceService : AdviceService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      var parseId: number = +id;
      this.adviceService.getAllAdvicesByProductId(parseId).subscribe({
        next: (data) => {
          this.adviceData = data
        },
        error: (err) => console.error('Error fetching prescription details', err)
      })
    }
  }
}
