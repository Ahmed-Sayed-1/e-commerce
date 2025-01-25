import { Component, Input } from '@angular/core';
import { DateItemTs } from '../date-item.ts';
import { Router } from '@angular/router';
import { CounterService } from '../counter.service.js';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() product1 :any ;
  counter: number = 0;
  // proudcts : number[]=[];
  proudct2 :{ id: number , counter : number}[]=[];
    constructor(private router: Router,private counterService: CounterService) {
      this.counterService.getproduct().subscribe(products => this.proudct2 = products);
      this.counterService.getCounter().subscribe(counter => this.counter = counter);
    }
//  constructor(private router: Router){}

handleRedirect(id: number){
  this.router.navigate(['/item-page' , id])
}
handleRedirect1(product1:DateItemTs) {
  this.counterService.setCounter(this.counter + 1) 
  this.counterService.setproudcts(this.product1)
  // this.counterService.setproudcts(this.product1)
  const foundProduct = this.proudct2.find(p => p.id === this.product1.id);
  if (foundProduct) {
    foundProduct.counter++;
    this.counterService.setproduct(this.proudct2);
    // console.log(this.counterService.getproduct());
    console.log(this.proudct2);
  } else {
    this.proudct2.push({ id: product1.id, counter: 1 });
    this.counterService.setproduct(this.proudct2);
    console.log(this.counterService.getproduct());
    // console.log(this.proudct2);
  }
  }
}

