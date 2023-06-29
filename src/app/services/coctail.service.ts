import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoctailService {

  constructor(private _httpClient: HttpClient) { }

  search(name: string) {
    let headers = new HttpHeaders();

    return this._httpClient.get(`${environment.apiUrl}/search.php?s=${name}`, {
      headers: headers
    });
  }

}
