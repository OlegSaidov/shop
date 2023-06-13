import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/products/models/product';
import { CartProduct } from '../../models/cart-product';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  productsInCart: CartProduct[] = [];
  totalCost: number = 0;
  totalQuantity: number = 0;
  isEmptyCart: boolean = true;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProducts()
  }
  // unfortunately, was not able to get rid of ngDoCheck, I'll probably need to wait NgRx.
  ngDoCheck(): void {
    this.productsInCart = this.cartService.getProducts()
    this.totalCost = this.cartService.totalCost
    this.totalQuantity = this.cartService.totalQuantity
    this.isEmptyCart = this.cartService.isEmptyCart()
  }

  increase (product: CartProduct): void {
    this.cartService.increaseQuantity(product)
  }

  decrease (product: CartProduct): void {
    this.cartService.decreaseQuantity(product)
  }

  removeProduct (product: CartProduct): void {
    this.cartService.removeProduct(product)
  }

  removeAll (): void {
    this.cartService.removeAllProducts()
  }

  trackByIndex (index: number, product: CartProduct): number {
    return index;
   }


}
