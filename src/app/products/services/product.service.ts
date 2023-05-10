import { Injectable } from '@angular/core';
import { MOCK_PRODUCTS } from '../shared/mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts () {
    return Promise.resolve(MOCK_PRODUCTS);
  }
}
