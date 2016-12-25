import { Injectable }    from '@angular/core';

@Injectable()
export class LocalStorageService {

  setItem(item, value){
    localStorage.setItem(item, JSON.stringify(value));
  }

  getItem(item){
    return JSON.parse(localStorage.getItem(item));
  }
}
