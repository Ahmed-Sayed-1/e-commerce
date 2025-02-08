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
  products : DateItemTs[]=[];
  proudct1 :{ p: DateItemTs , c : number}[]=[];
  proudct2 :{ id: number , c : number}[]=[];
  totalPrice :number = 0 ;
  productService = inject( RequestDateApiService )
  constructor(private counterService: CounterService,  private requestDateApiService: RequestDateApiService) {}
  ngOnInit() {
    this.counterService.getproudcts().subscribe((res) => (this.products = Array.from(res)));
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
    
    console.log(this.products);
  }
  inc(l: { p: DateItemTs; c: number; }) {
    this.counterService.setCounter(this.counter+1);
    l.c++;
    this.totalPrice+=l.p.price;
    }
  dec(l: { p: DateItemTs; c: number; }){
    this.counterService.setCounter(this.counter-1);
    l.c--;
    this.totalPrice-=l.p.price;
  }
  del(l: { p: DateItemTs; c: number }) {
    this.counterService.setCounter(this.counter - l.c);
    this.totalPrice -= l.p.price * l.c;
    this.products = this.products.filter(item => item.id !== l.p.id);
    this.proudct1 = this.proudct1.filter(item => item.p.id !== l.p.id);
    this.counterService.delProudcts(l.p);
    this.counterService.delproduct({ id: l.p.id, counter: l.c });
  }
  
}
