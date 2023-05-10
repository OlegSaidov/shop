import { Category } from "./category";

export interface Product {
  name: String;
  description: String;
  price: Number;
  category: Category;
  isAvailable: boolean;
}
