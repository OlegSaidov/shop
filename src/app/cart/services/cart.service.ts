import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';

// Это и есть регистрация сервиса, больше его не надо добавлять в providers
@Injectable({
  providedIn: 'root'
})
export class CartService {

private products: Product[] = [];
private _totalCost: number = 0;
private _totalQuantity: number = 0;

addProduct ( product: any): void {
  this.products.push(product);
  this.setTotalCost(product.price)
  this.setTotalQuantity()
}

setProducts (): Product[] {
  return this.products;
}

// с точки зрения попробовать - ок,
// с точки зрения полезности - думаю, что такое количество приватности не оправдано,
// слишком много добавляет кода не нужного и простого
private get totalCost(): number {
  return this._totalCost
}

private set totalCost (cost: number) {
  this._totalCost = cost
}

private setTotalCost(price: number) {
  this.totalCost = this.totalCost + price
}

public getTotalCost(): Number {
  return this.totalCost
}

private set totalQuantity (quantity: number) {
  this._totalQuantity = quantity
}

private get totalQuantity (): number {
  return this._totalQuantity
}

private setTotalQuantity () {
  this.totalQuantity = this.totalQuantity + 1
}

public getTotalQuantity (): Number {
  return this.totalQuantity
}

}
