export type CartItem = {
  productId: string;
  price: number;
  title: string;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};
