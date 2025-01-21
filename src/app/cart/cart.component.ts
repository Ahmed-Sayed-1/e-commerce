import { Component } from '@angular/core';
import { CounterService } from '../counter.service';
import { DateItemTs } from '../date-item.ts';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  
  proudct : DateItemTs[]=[];
  proudct1 :{ p: DateItemTs , c : number}[]=[];
  totalPrice :number = 0 ;
  // amount=1;
  constructor(private counterService: CounterService) {}
  ngOnInit() {
    this.counterService.getproudcts().subscribe((res) => (this.proudct = Array.from(res)));
    this.proudct1 = this.proudct.map((e) => ({
      p: e,
      c: 1
    }));
    for (let index = 0; index < this.proudct.length; index++) {
      this.totalPrice+=this.proudct[index].price;
      
    }
    console.log(this.proudct);
  }
  inc(l: { p: DateItemTs; c: number; }) {
    l.c++;
    this.totalPrice+=l.p.price;
    }
  dec(l: { p: DateItemTs; c: number; }){
    l.c--;
    this.totalPrice-=l.p.price;
  }
}
