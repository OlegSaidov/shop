import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private products: Product[] = [];

addProduct ( product: any): void {
  this.products.push(product);
}

setProducts (): Product[] {
  return this.products;
}

}
