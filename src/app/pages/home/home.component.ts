import { Component, OnInit, inject, signal } from '@angular/core';
import { FakeStoreApiService } from '../../services/fakestoreapi.service';
import { CurrencyPipe, UpperCasePipe} from '@angular/common';
import { FakeStoreResponse, Rate } from '../../models/fakeStore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CurrencyPipe , UpperCasePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  title = 'FakeStore';

  fakeStoreSvc = inject(FakeStoreApiService);

  products = signal<FakeStoreResponse[]>([]);

  ngOnInit(): void {
    this.fakeStoreSvc.getProducts().subscribe((data) => {
      this.products.set(data);
    })
  }

  ranking(rate: number): string {
    return Rate.get(Math.round(rate)) || '';
  }

}
