<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller
{
    function register(Request $req)
    {
      $user = new User;
      $user->Name = $req->Name;
      $user->email = $req->email;
      $user->password = $req->password;
      $user->save();
      return ["Result"=>"User Registered Succesfully"];
    }

    function login(Request $req)
    {
      $user = User::where([['email','=',$req->email],['password','=',$req->password]] )->first();
      return $user;
    }
}
