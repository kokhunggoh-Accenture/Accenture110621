import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Users } from '../_helpers/interfaces/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<HttpResponse<Users>>{
    return this.http.get<Users>(environment.apiHost + "users", { observe: 'response'});
  }
  
  getUser(id):Observable<any>{
    return this.http.get(environment.apiHost + "users/" + id);
  }
  
  createUser(id, payload):Observable<any>{
    return this.http.put(environment.apiHost + "users/" + id, payload);
  }
  
  deleteUser(id):Observable<any>{
    return this.http.delete(environment.apiHost + "users/" + id);
  }
  
  updateUser(id, payload):Observable<any>{
    const httpOptions = {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put(environment.apiHost + "users/" + id, JSON.stringify(payload), httpOptions);
  }
}
