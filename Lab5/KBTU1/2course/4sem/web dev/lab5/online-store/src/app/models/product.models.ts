export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  likes: number;
  isLiked?: boolean;   
  image: string;
  images: string[];
  link: string;
  categoryId: number;
}
