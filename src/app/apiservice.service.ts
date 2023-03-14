import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get<any>("http://localhost:3000/products/")
    .pipe(map((res:any)=>{
   return res;
    }))
  }
}
