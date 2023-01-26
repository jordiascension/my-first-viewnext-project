import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[]=["Adam Taylor",'E354', 'at@abc.net']

  info2: string[]=["Shawn Wilson",'E673','sw@abc.net']

  info3: string[]=["Mark Fisher",'E865','mf@abc.net']

  constructor() { }

  getInfo1():string[]{

    return this.info1

  }

  getInfo2():string[]{

    return this.info2

  }

  getInfo3():string[]{

    return this.info3

  }
}
