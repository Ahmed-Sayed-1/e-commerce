import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DateItemTs } from './date-item.ts';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = new BehaviorSubject<number>(0);
  private product = new BehaviorSubject<{id: number, counter: number}[]>([]);
  // private ids = new BehaviorSubject<Set<number>>(new Set<number>());
  private proudcts = new BehaviorSubject<Set<DateItemTs>>(new Set<DateItemTs>());
  constructor() { }
  getCounter(){
    return this.counter.asObservable();
  }
  // getid(){
  //   return this.ids;
  // }
  // setid(id :number){
  //   const currentid= this.ids.value;
  //   currentid.add(id);
  //   this.ids.next(currentid);
  // }
  getproduct(){
    return this.product.asObservable();
  }
  setproduct(list: { id: number; counter: number }[])

  {

    this.product.next(list);

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
