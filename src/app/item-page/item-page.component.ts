import { Component, inject, Input } from '@angular/core';
import productsItem from '../date/products.json';
import { DateItemTs } from '../date-item.ts';
import { RatingModule } from 'primeng/rating';
// import { RatingModule } from 'primeng/rat  ing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import{theme.css} from '@primeng/themes/'
import { from } from 'rxjs';
// @import '~primeng/resources/themes/saga-blue/theme.css';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RequestDateApiService } from '../request-date-api.service';

@Component({
  selector: 'app-item-page',
  imports: [CommonModule, FormsModule, RatingModule,ReactiveFormsModule],
  templateUrl: './item-page.component.html',
  template: `
    <div style="text-align:center">
      <h1>Welcome to {{ title }}!</h1>
      <p-rating [(ngModel)]="ratingValue" [cancel]="false"></p-rating>
      <p>Your rating: {{ ratingValue }}</p>
    </div>
  `,
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent {
  ratingForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.ratingForm = this.fb.group({
      rating: [null]
    });
  }
  // productsListItem: DateItemTs[] = [];
  @Input() id : string = ''; 
  product!: DateItemTs;
  productService = inject( RequestDateApiService )
 
  ngOnInit() {
    // this.productsListItem = productsItem.products.map((item: any) => ({
    //   ...item,
    //   brand: item.brand || ''
    // }));
    // console.log(this.productsListItem);
    // this.product=this.productsListItem.find((e: DateItemTs) => e.id === Number(this.id));
    // console.log(this.product);
    this.productService
    .getDetails(this.id)
    .subscribe((res) => (this.product = res), (error) => console.log(error));
  }
}
/*

@NgModule({

  declarations: [

    AppComponent,

    // other components

  ],

  imports: [

    BrowserModule,

    ReactiveFormsModule,

    // other modules

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }

*/ 