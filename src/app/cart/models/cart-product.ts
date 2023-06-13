import { Product } from "src/app/products/models/product";

export interface CartProduct {
   product: Product,
   cost: number,
   quantity: number
}
