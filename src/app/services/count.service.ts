import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count: number = 0;

  constructor() { }


  addCount() {
    this.count++;
    console.log(this.count);
  }
  getCount(): number {
    return this.count;
  }
}
