import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/users';

  register(user: IUser): Observable<IUser> {
    // Por defecto, asignamos el rol 'user' si no viene definido
    const newUser = { ...user, role: user.role || 'user' };
    return this.http.post<IUser>(this.url, newUser);
  }

  currentUser = signal<any>(JSON.parse(localStorage.getItem('user') || 'null'));

  isLoggedIn() {
    return !!this.currentUser();
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}