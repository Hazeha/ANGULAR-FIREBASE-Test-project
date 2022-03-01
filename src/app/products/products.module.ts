import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { TruncatePipe } from './product/truncate.pipe';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './product/products.component';
import { ProductRatingComponent } from './product-rating/product-rating.component';
import { StarComponent } from './star/star.component';
import { StarFillComponent } from './star/starfill.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    StarComponent,
    StarFillComponent,
    ProductComponent,
    ProductsComponent,
    ProductRatingComponent,
    TruncatePipe
  ],
  exports: [
    ProductComponent,
    FormsModule,
    RouterModule

  ],
  providers: [
  ]
})
export class ProductsModule{
}
