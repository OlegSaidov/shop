import { Category } from "./category";

export interface Product {
  name: String;
  description: String;
  price: number;
  category: Category;
  isAvailable: boolean;
}
