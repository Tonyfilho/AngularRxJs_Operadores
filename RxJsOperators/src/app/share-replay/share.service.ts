import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private httpService: HttpClient) {
    
   }

   getUm(): Observable<Object> {
   return this.httpService.get('https://jsonplaceholder.typicode.com/todos/1').pipe(shareReplay());
   }
}
