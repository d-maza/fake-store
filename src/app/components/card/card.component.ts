import { Component, Input } from '@angular/core';
import { Product, Rate } from '../../models/fakeStore';
import { CurrencyPipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input({ required: true }) product!: Product;

  ranking(rate: number): string {
    return Rate.get(Math.round(rate)) || '';
  }

}
