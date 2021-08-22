<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::resource('post',PostController::class)->only(['index','store','show','update','destroy']);
Route::resource('user',UserController::class)->only(['index','store','show','update','destroy']);
Route::post('/import','PostController@import');
Route::get('/export','PostController@export');
Route::post('/login','LoginController@login');





