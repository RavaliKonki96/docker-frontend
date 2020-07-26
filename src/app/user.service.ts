import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './interface/User';
import { Observable } from 'rxjs';
const GET_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text' as 'json'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: 'http://172.31.21.24:8081';
  constructor(private http: HttpClient) { }

  addUser(newUser: User): Observable<any> {
    return this.http.post<any>('http://172.31.21.24:8081' + `/user/addNewUser` , newUser, GET_HEADERS);
  }

  getUser(emailId: string): Observable<any> {
    return this.http.get<any>('http://172.31.21.24:8081' + '/user/getUser/' + emailId);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>('http://172.31.21.24:8081' + '/user/getUsers');
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>('http://172.31.21.24:8081' + '/user/' + userId);
  }
  updateUser(user: User): Observable<any> {

    return this.http.put<any>('http://172.31.21.24:8081' + `/user/`, user, GET_HEADERS);
  }
}
