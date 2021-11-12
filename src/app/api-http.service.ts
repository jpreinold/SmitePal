import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiHttpService {  
  
  constructor(
    // Angular Modules
    private http: HttpClient
  ) { }  
  
  public getSession(url: string, options?: any) {
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin',"https://api.smitegame.com/smiteapi.svc");
    return this.http.get(url, {headers: headers});
  }
}