import { Component, OnInit } from '@angular/core';
import productsItem from '../date/products.json';
import { Router } from '@angular/router';

import { RatingModule } from 'primeng/rating';
import { DateItemTs } from '../date-item.ts';
import { ItemComponent } from "../item/item.component";
import { RequestDateApiService } from '../request-date-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [ItemComponent]
})
export class HomeComponent implements OnInit {
  sortOrder : string = 'desc'
  productsList: DateItemTs[]= [];
  constructor(private router: Router,private requestDateApiService : RequestDateApiService){}
  ngOnInit() {
    this.requestDateApiService
      .getList(this.sortOrder)
      .subscribe((res) => (this.productsList = res.products));
    console.log(this.productsList);
  }
  receivedFromChild(id: number) {
    // console.log('FROM PARENT', id);
    this.productsList = this.productsList.filter((product: any) => product.id !== id);
  }
 
}
