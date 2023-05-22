import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  // Обычно модель записи корзины содержит дополнительные поля, например, количество.
  productsInCart: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.setProducts()
  }

  trackByIndex (index: number, product: Product): Number {
    return index;
   }
}
