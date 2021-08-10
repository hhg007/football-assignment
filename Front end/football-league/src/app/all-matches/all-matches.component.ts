import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
  results = []
  matches = []

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.mainService.match().subscribe((data)=>{
      this.matches = <any>data
    })
  }
  buyTicket(match_id:any)
  {
    const user  = JSON.parse(localStorage.getItem('user'))
    if(!user)
    {
      alert("Please login first")
    }
    else
    {
      var ticket = {
        match_id : match_id,
        user_id : user.id
      }
      this.mainService.bookTicket(ticket).subscribe(data=>{
        location.reload()
      })
    }
    
  }

  cancelTicket(match_id)
  {
    const user  = JSON.parse(localStorage.getItem('user'))
    if(!user)
    {
      alert("Please login first")
    }
    else
    {
      var ticket = {
        match_id : match_id,
        user_id : user.id
      }
      this.mainService.deleteTicket(ticket).subscribe(data=>{
        location.reload()
      })
    }
  }
}
