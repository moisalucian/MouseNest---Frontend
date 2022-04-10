import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User} from '../interfaces/user';
import { Response} from '../interfaces/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpHeaders ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  login(user:User):Observable<Response>{
    return this.httpClient.post<Response>("/server/login", JSON.stringify(user),this.httpHeaders)
  }

  register(user:User):Observable<User>{
    return this.httpClient.post<User>("/server/register", JSON.stringify(user),this.httpHeaders)
  }


}
