import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService
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
}
