import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  results = []
  matches = []
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.result().subscribe((data)=>{
      console.log(data)
      this.results = <any>data
    })
    this.mainService.match().subscribe((data)=>{
      console.log(data)
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
