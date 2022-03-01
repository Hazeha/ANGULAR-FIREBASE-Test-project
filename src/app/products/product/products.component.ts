import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  template: `
    <div class="container">
      <div *ngIf="products.length > 0" class="row">
        <div *ngFor="let product of products" class="col-lg-4 col-md-4 col-sm-8 mb-4">
          <app-product [data]="product"></app-product>
        </div>
        <div *ngIf="products == 0">
          <p>No products to display</p>
        </div>
      </div>
    </div>
  `,
  providers: [ProductService]
})
export class ProductsComponent{
  products;

  constructor(productService: ProductService){
    this.products = productService.getProducts();
    console.log(this.products);
  }

}
