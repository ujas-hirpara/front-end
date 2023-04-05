import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getData(index:any):Observable<any>{
    return this.http.get(`http://localhost:4000/profile/${index}`)
  }

  getProductData():Observable<any>{
    return this.http.get(`http://localhost:4000/showproduct`)
  }
  postCartProduct(data:any):Observable<any>{
    return this.http.post(`http://localhost:4000/postCartProduct`,data)
  }

  getCartProduct(index:any):Observable<any>{
    return this.http.get(`http://localhost:4000/getCartProduct/${index}`)
  }

  saveData(data:any):Observable<any>{
    return this.http.post(`http://localhost:4000/saveData`,data)
  }

  dropData(_id:any,productId:number):Observable<any>{
    return this.http.delete(`http://localhost:4000/dropData/${_id}/${productId}`)
  }
  fetchproduct():Observable<any>{
    return this.http.get(`http://localhost:4000/showproduct`)
  }

  newFindProduct(productId:number):Observable<any>{
    return this.http.get(`http://localhost:4000/findProduct/${productId}`)
  }

}
