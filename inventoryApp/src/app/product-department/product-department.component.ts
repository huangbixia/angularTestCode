import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  inputs: ['product']
})
export class ProductDepartmentComponent implements OnInit {
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
