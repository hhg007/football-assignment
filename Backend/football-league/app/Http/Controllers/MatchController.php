<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Match;

class MatchController extends Controller
{
    function getMatch()
    {
      $result = Match::all();
      return $result;
    }
}
