import { Component, Input } from '@angular/core';
import { DateItemTs } from '../date-item.ts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
 constructor(private router: Router){}
 @Input() product1 :any ;
handleRedirect(id: number){
  this.router.navigate(['/item-page' , id])
}
}

