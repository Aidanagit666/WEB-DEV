import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  selectedImage = '';

  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  setImage(img: string) {
    this.selectedImage = img;
  }

  get fullStars(): number {
    return Math.floor(this.product.rating);
  }

  get hasHalfStar(): boolean {
    const frac = this.product.rating - Math.floor(this.product.rating);
    return frac >= 0.5;
  }

  get emptyStars(): number {
    const used = this.fullStars + (this.hasHalfStar ? 1 : 0);
    return Math.max(0, 5 - used);
  }

  whatsappShareUrl(): string {
    const text = `Check out this product: ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  telegramShareUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
}
