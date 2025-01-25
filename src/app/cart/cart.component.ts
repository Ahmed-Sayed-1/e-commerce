import { Component, inject, Inject } from '@angular/core';
import { CounterService } from '../counter.service';
import { RequestDateApiService } from '../request-date-api.service';
import { DateItemTs } from '../date-item.ts';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  proudcts : DateItemTs[]=[];
  proudct1 :{ p: DateItemTs , c : number}[]=[];
  proudct2 :{ id: number , c : number}[]=[];
  totalPrice :number = 0 ;
  productService = inject( RequestDateApiService )
  // amount=1;
  constructor(private counterService: CounterService,  private requestDateApiService: RequestDateApiService) {}
  ngOnInit() {
    this.counterService.getproudcts().subscribe((res) => (this.proudcts = Array.from(res)));
    this.counterService.getproduct().subscribe((res) => {
      res.forEach(item => {
        this.productService.getDetails(item.id.toString()).subscribe(
          (product) => {
            this.proudct1.push({ p: product, c: item.counter });
            this.totalPrice+=product.price*item.counter;
          },
          (error) => console.log(error)
        );
      });
    });
    // this.proudct1 = this.proudcts.map((e) => ({
    //   p: e,
    //   c: 1
    // }));
    // for (let index = 0; index < this.proudct1.length; index++) {
    //   this.totalPrice+=this.proudct1[index].p.price*this.proudct1[index].c;
      
    // }
    console.log(this.proudcts);
  }
  inc(l: { p: DateItemTs; c: number; }) {
    // this.counterService.getCounter().subscribe((res) => {
    //   const counter = res as number;
    //   console.log(counter);
      
    //   this.counterService.setCounter(counter + 1);
    // });
    l.c++;
    this.totalPrice+=l.p.price;
    }
  dec(l: { p: DateItemTs; c: number; }){
    l.c--;
    this.totalPrice-=l.p.price;
  }
}
