import { Component, OnInit, inject, signal } from '@angular/core';
import { FakeStoreApiService } from '../../services/fakestoreapi.service';
import {  Product } from '../../models/fakeStore';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  title = 'FakeStore';

  fakeStoreSvc = inject(FakeStoreApiService);

  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.fakeStoreSvc.getProducts().subscribe((data) => {
      this.products.set(data);
    })
  }



}
