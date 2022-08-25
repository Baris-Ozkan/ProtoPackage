import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http:HttpClient) {}

  API_Request(request: string, upToThisN: number): Observable<any> {

    // this.res = await fetch(request);
    // this.res = await this.res.json();
    //
    // const target:[] = this.res.slice(0,upToThisN);

    return this.http
      .get('https://jsonplaceholder.typicode.com/' + request)
      .pipe(
        // filter((obj:any) => obj.id <= upToThisN),
        map((response) => {return response;})

      )
  }
}
