export interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating?: Rating;
}

export interface ProductPageProps {
  product: Product;
}

export interface ProductsPageProps {
  products: Product[];
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export interface HeroProps {
  onShopNowClick?: () => void;
}

export interface ProductCardProps {
  id: number | string;
  image: string;
  name: string;
  price: string | number;
  description: string;
  onAddToCart: () => void;
}
