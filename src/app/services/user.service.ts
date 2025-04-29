import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = signal<User[]>([])

  constructor(private http: HttpClient) { 
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:4200/api/users').pipe(
      tap(users => this.users.set(users))
    );  
  }
}
