 import { Component, Input } from '@angular/core';


 @Component({
   selector: 'app-product',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.css']
 })
 export class ProductComponent {
   @Input() data;
   isActive = false;
   onClick($event){
     console.log('bought 1 bob', $event);
   }
 }
