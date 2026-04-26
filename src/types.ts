export type Category = 'T-Shirts' | 'Hoodies' | 'Pants' | 'Footwear' | 'Jackets' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
