import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Users } from '../_helpers/interfaces/Users';
import { DataResponse } from '../_responses/dataResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<DataResponse>{
    return this.http.get<DataResponse>(environment.apiHost + "users", httpOptions);
  }
  
  getUser(id):Observable<any>{
    return this.http.get(environment.apiHost + "users/" + id, httpOptions);
  }
  
  createUser(payload):Observable<any>{
    return this.http.post(environment.apiHost + "create-user", payload, httpOptions);
  }
  
  deleteUser(id):Observable<any>{
    return this.http.delete(environment.apiHost + "delete-user/" + id, httpOptions);
  }
  
  updateUser(id, payload):Observable<any>{
    const httpOptions = {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put(environment.apiHost + "update-user/" + id, JSON.stringify(payload), httpOptions);
  }
}
