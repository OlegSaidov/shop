import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.showProducts();
  }

  trackByIndex (index: number, product: Product): Number {
     return index;
    }

  private showProducts (): void {
    this.productService.getProducts()
    .then(products => this.products = products);
  }

  addProducts (product: Product) {
    this.cartService.addProduct(product)
  }
}
