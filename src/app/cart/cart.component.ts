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
  counter  :number=0;
  proudcts : DateItemTs[]=[];
  proudct1 :{ p: DateItemTs , c : number}[]=[];
  proudct2 :{ id: number , c : number}[]=[];
  totalPrice :number = 0 ;
  productService = inject( RequestDateApiService )
  // amount=1;
  constructor(private counterService: CounterService,  private requestDateApiService: RequestDateApiService) {}
  ngOnInit() {
    this.counterService.getproudcts().subscribe((res) => (this.proudcts = Array.from(res)));
    this.counterService.getCounter().subscribe((res) => (this.counter = res));
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
    this.counterService.setCounter(this.counter+1);
    // const product = this.proudct1.find((e) => e.p.id === l.p.id);
    // if (product) {
    //   product.c++;
    // }
    // const transformedProducts = this.proudct1.map(item => ({ id: item.p.id, counter: item.c }));
    // this.counterService.setproduct(transformedProducts);
    
    l.c++;
    this.totalPrice+=l.p.price;
    }
  dec(l: { p: DateItemTs; c: number; }){
    this.counterService.setCounter(this.counter-1);
    // const product = this.proudct1.find((e) => e.p.id === l.p.id);
    // if (product) {
    //   product.c--;
    // }
    // const transformedProducts = this.proudct1.map(item => ({ id: item.p.id, counter: item.c }));
    // this.counterService.setproduct(transformedProducts);
    l.c--;
    this.totalPrice-=l.p.price;
  }
}
