import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  getData() {
    console.log('do execute getData method');
    return [{
      name: 'ChenGang',
      online: true
    }];
  }


}
