import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  inputs: ['product'],
  host: { class: 'item' }
})
export class ProductRowComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
