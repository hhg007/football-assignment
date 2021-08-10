<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ticket;

class TicketController extends Controller
{
    function bookTicket(Request $req)
    {
      $ticket = new Ticket;
      $ticket->match_id = $req->match_id;
      $ticket->user_id = $req->user_id;
      $ticket->save();
      return ["Result"=>"Ticket Book Succesfully"];
    }

    function unbookTicket(Request $req)
    {
      $ticket = Ticket::where([['match_id','=',$req->match_id],['user_id','=',$req->user_id]] )->first();
      if($ticket)
      {
        $ticket->delete();
        return ["Result"=>"Ticket deleted"];
      }
      else{
        return ["Result"=>"1"];
      }
    }
}
