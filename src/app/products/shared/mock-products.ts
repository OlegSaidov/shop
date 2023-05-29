import { Product } from "../models/product";

export const MOCK_PRODUCTS: Product[] = [
  {
    name: 'Channel',
    description: 'Parfum colection brand perfume.',
    price: 50,
    category: 'Perfume',
    isAvailable: true
  },
  {
    name: 'Apple',
    description: 'Fresh fruit.',
    price: 5,
    category: 'Grocery',
    isAvailable: true
  },
  {
    name: 'Jacket',
    description: 'Male winter clothing.',
    price: 55,
    category: 'Clothes',
    isAvailable: false
  }

]
