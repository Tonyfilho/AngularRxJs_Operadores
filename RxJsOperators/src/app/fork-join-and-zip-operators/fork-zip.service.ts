import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForkZipService {
  constructor(private httpService: HttpClient) {}
  getUmBacon() {
    return this.httpService.get(
      `https://baconipsum.com/api/?type=meat-and-filler`
    );
  }
  getDoisBacon() {
    return this.httpService.get(
      `https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1`
    );
  }
}
