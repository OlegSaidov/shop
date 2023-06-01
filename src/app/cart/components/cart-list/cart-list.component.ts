import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from 'src/app/products/models/product';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  productsInCart: Product[] = [];
  totalCost: Number = 0;
  totalQuantity: Number = 0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.setProducts()
  }

  // можно сделать totalCost, totalQuantity гетерами и не нужно тогда будет
  // использовать ngDoCheck
  ngDoCheck():void {
    this.totalCost = this.cartService.getTotalCost()
    this.totalQuantity = this.cartService.getTotalQuantity()
  }

  trackByIndex (index: number, product: Product): Number {
    return index;
   }


}
