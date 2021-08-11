import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private ApiUrl = "http://localhost:50002/api"

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.ApiUrl + '/category/')
    
  }

  create(product:Category):Observable<Category>{
    return this.httpClient.post<Category>(this.ApiUrl + '/category/', JSON.stringify(product), this.httpOptions)   
  }

  getById(id:number): Observable<Category> {
    return this.httpClient.get<Category>(this.ApiUrl + '/category/' + id)    
  }   

  delete(id:number)
  {
    return this.httpClient.delete<Category>(this.ApiUrl+'/category/'+id, this.httpOptions);
  }
}