import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyAPIService {
  res: any | undefined;

  constructor() {}

  async dummyRequest(request: RequestInfo) {
    this.res = await fetch(request);
    this.res = await this.res.json();

    const target:[] = this.res.slice(0,10);

    return target;
  }
}
