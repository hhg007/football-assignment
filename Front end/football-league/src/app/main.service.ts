import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MainService {
   url = "http://127.0.0.1:8000/api/"

  constructor(private http:HttpClient) { }

  getLogin(user:any)
  {
    const us = JSON.stringify(user)
    return this.http.post<any>(`${this.url}login`, {email: user.email, password: user.password})
    .pipe(map(user => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
      }
    }),
  );
}

  registerUser(user:any)
  {
    return this.http.post<any>(`${this.url}register`, {Name:user.Name,email: user.email, password: user.password})
    .pipe(map(user => {
      if (user) {
        alert("Register successful")
      }
    }),
  );
  }

  result()
  {
    return this.http.get<any>(`${this.url}result`,)
  }

  match()
  {
    return this.http.get<any>(`${this.url}matches`,)
  }

  bookTicket(ticket:any)
  {
    return this.http.post<any>(`${this.url}bookTicket`, {match_id:ticket.match_id,user_id:ticket.user_id})
    .pipe(map(data => {
      if (data) {
        alert("Ticket Booked Succesfully.")
      }
    }),
  );
  }

  deleteTicket(ticket:any)
  {
    return this.http.delete<any>(`${this.url}deleteTicket?match_id=${ticket.match_id}&user_id=${ticket.user_id}`,)
    .pipe(map(data => {
      if (data) {
        alert("Ticket Delete Succesfully.")
      }
    }),
  );
  }

}
