import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getData(index:any):Observable<any>{
    return this.http.get(`http://100.26.33.131/profile/${index}`)
  }

  getProductData():Observable<any>{
    return this.http.get(`http://100.26.33.131/showproduct`)
  }
  postCartProduct(data:any):Observable<any>{
    return this.http.post(`http://100.26.33.131/postCartProduct`,data)
  }

  getCartProduct(index:any):Observable<any>{
    return this.http.get(`http://100.26.33.131/getCartProduct/${index}`)
  }

  saveData(data:any):Observable<any>{
    return this.http.post(`http://100.26.33.131/saveData`,data)
  }

  dropData(_id:any,productId:number):Observable<any>{
    return this.http.delete(`http://100.26.33.131/dropData/${_id}/${productId}`)
  }
  fetchproduct():Observable<any>{
    return this.http.get(`http://100.26.33.131/showproduct`)
  }

  newFindProduct(productId:number):Observable<any>{
    return this.http.get(`http://100.26.33.131/findProduct/${productId}`)
  }

}
