import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }


  postUsers(body:any){

   

    return this.http.post('https://jsonplaceholder.typicode.com/users', body);
  }


  getUsers() {

    return this.http.get('https://jsonplaceholder.typicode.com/users');

//     const users = [
//       { userId: 10, userName: 'karan' },
//       { userId: 20, userName: 'Agrawal' },
//     ];

//     return users;
  
}

}
