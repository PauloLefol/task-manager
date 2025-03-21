import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class DataService {
private apiUrl = 'http://localhost:5000/api/';

 constructor(private http: HttpClient) {} 
 
 getData(): Observable<any> { 
   return this.http.get(this.apiUrl + 'get_data'); 
 } 

 writeData(data: any): Observable<any> {
    return this.http.post(this.apiUrl + 'write_data', {data: data});
 }
}
