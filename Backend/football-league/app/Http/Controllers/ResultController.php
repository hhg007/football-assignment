<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Result;

class ResultController extends Controller
{
    function getResult(Request $req)
    {
      $result = Result::all();
      return $result;
    }
}
