import { Injectable }    from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class LocalStorageService {

  constructor(private store$: Store<any>) {
    this.store$.skip(1).subscribe(cities => {
      this.setItem('cities', JSON.stringify(cities));
    });
  }

  setItem(item, value){
    localStorage.setItem(item, JSON.stringify(value));
  }

  getItem(item){
    return JSON.parse(localStorage.getItem(item));
  }
}
