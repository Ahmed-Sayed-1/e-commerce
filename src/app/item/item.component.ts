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
    constructor(private router: Router,private counterService: CounterService) {
      this.counterService.getCounter().subscribe(counter => this.counter = counter);
    }
//  constructor(private router: Router){}
 
handleRedirect(id: number){
  this.router.navigate(['/item-page' , id])
}
handleRedirect1(product1:DateItemTs) {
  this.counterService.setCounter(this.counter + 1) 
  this.counterService.setproudcts(this.product1) 
  }
}

