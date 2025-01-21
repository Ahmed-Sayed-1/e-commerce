import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateItemTs } from './date-item.ts';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);
  private proudcts = new BehaviorSubject<Set<DateItemTs>>(new Set<DateItemTs>());
  constructor() { }
  getCounter(){
    return this.counter.asObservable();
  }

  setCounter(newCounterVal : number){
    this.counter.next(newCounterVal);
  }
  getproudcts(){
    return this.proudcts.asObservable();
  }
  setproudcts(newproudctsVal : DateItemTs){
    const currentProducts = this.proudcts.value;
    currentProducts.add(newproudctsVal);
    this.proudcts.next(currentProducts);
  }
}
