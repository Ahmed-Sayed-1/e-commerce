import { Component, Input } from '@angular/core';
import productsItem from '../date/products.json';
import { DateItemTs } from '../date-item.ts';
@Component({
  selector: 'app-item-page',
  imports: [],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  productsListItem: DateItemTs[] = [];
  @Input() id : string = ''; 
  product: any={};
 
  ngOnInit() {
    this.productsListItem = productsItem.products.map((item: any) => ({
      ...item,
      brand: item.brand || ''
    }));
    console.log(this.productsListItem);
    this.product=this.productsListItem.find((e: DateItemTs) => e.id === Number(this.id));
    console.log(this.product);
  }
}
