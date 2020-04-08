import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/product'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  inputs: ['productList'],
  outputs: ['onProductSelected']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
