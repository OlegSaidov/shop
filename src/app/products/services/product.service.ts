import { Injectable } from '@angular/core';
import { MOCK_PRODUCTS } from '../shared/mock-products';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = MOCK_PRODUCTS;

  getProducts () {
    return Promise.resolve(this.products);
  }
}
