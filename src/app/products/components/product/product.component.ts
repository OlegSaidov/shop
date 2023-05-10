import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product?: Product;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart (product: any):void {
   this.cartService.addProduct(product);
    console.log("Good choice, go back to shopping?")
  }

}
