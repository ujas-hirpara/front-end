import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  public url = "http://localhost:4000/userdata"

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.url)
  }

  
  postUser(userdata:any):Observable<any>{
    console.log("signData",userdata);
    return this.http.post(this.url,userdata)
  }

  loginUser(userdata:any):Observable<any>{
    return this.http.post("http://localhost:4000/login",userdata)
  }
}
