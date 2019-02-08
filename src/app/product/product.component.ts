import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mocked-product';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = PRODUCTS;
  url: String;
  product: Product;

  constructor(private route: ActivatedRoute, private location: Location) {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.findProductById(id);
  }

  ngOnInit() {
  }

  private findProductById(productId: string): Product {
    return this.products.find(product => product.id === productId);
  }

}
