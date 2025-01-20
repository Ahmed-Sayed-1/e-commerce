import { Component, OnInit } from '@angular/core';
import productsItem from '../date/products.json';
import { Router } from '@angular/router';

import { RatingModule } from 'primeng/rating';
import { DateItemTs } from '../date-item.ts';
import { ItemComponent } from "../item/item.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ItemComponent]
})
export class HomeComponent implements OnInit {

  productsList: DateItemTs[]= [];
  constructor(private router: Router){}
  ngOnInit() {
   
    this.productsList = productsItem.products.map((item: any) => ({
      ...item,
      brand: item.brand || ''
    }));
    console.log(this.productsList);
  }
 
}