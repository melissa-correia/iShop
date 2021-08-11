import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private ApiUrl = "http://localhost:50002/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.ApiUrl + '/customer/')
    
  }

  create(product:Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.ApiUrl + '/customer/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.ApiUrl + '/customer/' + id)    
  }   
  update(id:number, product:Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.ApiUrl + '/products/' + id, JSON.stringify(product), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler))
    
  }

  delete(id:number)
  {
    return this.httpClient.delete<Customer>(this.ApiUrl+'/customer/'+id, this.httpOptions);
  }
}