import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartProduct } from '../models/cart-product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _cartProducts: CartProduct[] = [];
  private _totalCost: number = 0;
  private _totalQuantity: number = 0;

  get totalCost(): number {
    return this._totalCost;
  }

  set totalCost(cost: number) {
    this._totalCost = cost;
  }

  get totalQuantity(): number {
    return this._totalQuantity;
  }

  set totalQuantity(quantity: number) {
    this._totalQuantity = quantity;
  }

  get cartProducts(): CartProduct[] {
    return this._cartProducts;
  }

  set cartProducts(products: CartProduct[]) {
    this._cartProducts = products;
  }

  private _changeQuantity(
    cartProduct: CartProduct,
    quantity: number,
    cost: number
  ): void {
    let updatedProduct: CartProduct = { ...cartProduct, quantity, cost };
    this.cartProducts = [
      ...this.cartProducts.filter(
        (cProduct) => cProduct.product.name === cartProduct.product.name
      ),
      updatedProduct,
    ];
  }

  public increaseQuantity(cartProduct: CartProduct): void {
    this._changeQuantity(
      cartProduct,
      cartProduct.quantity + 1,
      cartProduct.cost + cartProduct.product.price
    );
    this.totalCost = this.totalCost + cartProduct.product.price;
    this.totalQuantity = this.totalQuantity + 1;
  }

  public decreaseQuantity(cartProduct: CartProduct): void {
    this._changeQuantity(
      cartProduct,
      cartProduct.quantity - 1,
      cartProduct.cost - cartProduct.product.price
    );
    this.totalCost = this.totalCost - cartProduct.product.price;
    this.totalQuantity = this.totalQuantity - 1;
  }

  public getProducts(): CartProduct[] {
    return this.cartProducts;
  }

  public addProduct(product: Product): void {
    let cartProduct: CartProduct = {
      product,
      quantity: 1,
      cost: product.price,
    };
    this.cartProducts = [...this.cartProducts, cartProduct];
    this.totalCost = this.totalCost + product.price;
    this.totalQuantity = this.totalQuantity + 1;
  }

  public removeProduct(product: CartProduct): void {
    this.cartProducts = this.cartProducts.filter(
      (cartProduct) => cartProduct.product.name !== product.product.name
    );
  }

  public removeAllProducts(): void {
    this.cartProducts = [];
  }

  public isEmptyCart(): boolean {
    return this.cartProducts.length > 0;
  }
}
