import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartProduct } from '../../models/cart-product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
 @Input() product!: CartProduct
 @Output() increase = new EventEmitter<CartProduct>()
 @Output() decrease = new EventEmitter<CartProduct>()
 @Output() removeProduct = new EventEmitter<CartProduct>()
  constructor() { }

  ngOnInit(): void {
  }

  onIncrease (product: CartProduct): void {
    this.increase.emit(product)
  }

  onDecrease (product: CartProduct): void {
    this.decrease.emit(product)
  }

  onRemoveProduct (product: CartProduct): void {
    this.removeProduct.emit(product)
  }
}
