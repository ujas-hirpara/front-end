import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http:HttpClient) { }

  getadminData(index:any):Observable<any>{
    return this.http.get(`http://localhost:4000/profile/${index}`)
  }

  getProductData():Observable<any>{
    return this.http.get(`http://localhost:4000/showproduct`)
  }

  postProduct(productData:any):Observable<any>{
    return this.http.post(`http://localhost:4000/addproduct`,productData)
  }

  getTotalProduct(adminId:any):Observable<any>{
    return this.http.get(`http://localhost:4000/totalProduct/${adminId}`)
  }
  getAdminProductData(adminId:number):Observable<any>{
    return this.http.get(`http://localhost:4000/adminTotalProduct/${adminId}`)
  }
}
