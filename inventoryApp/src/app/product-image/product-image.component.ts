import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/product';

@Component({
  selector: 'app-product-image',
  template: `<img class="product-image" [src]="product.imageUrl">`,
  host: { class: 'ui small image' },
  inputs: ['product']
})
export class ProductImageComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
