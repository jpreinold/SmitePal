import { Injectable } from '@angular/core';
import { Constants } from '../app/config/constants';
import { ApiHttpService } from './api-http.service';
import {Md5} from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  session_id: string = "";
  signature: string = "";
  moment = require('moment');
  timestamp: string = "";
  md5: Md5 = new Md5();
  
  constructor(private api: ApiHttpService) { }
  
  getNewSession() {
    this.setSignature();
    this.api.getSession(Constants.SMITE_API_ENDPOINT + "/createsessionjson/" + Constants.DEVELOPER_ID + "/" + this.signature + "/" + this.timestamp).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.message)
      }
    );
  }

  private setSignature() {
    this.timestamp = this.moment().add(5, 'hours').subtract(1, 'seconds').format("yyyyMMDDHHmmss");
    let string2hash = Constants.DEVELOPER_ID + "createsession" + Constants.AUTH_KEY + this.timestamp;
    this.signature = this.md5.appendStr(string2hash).end().toString();
  }

}
