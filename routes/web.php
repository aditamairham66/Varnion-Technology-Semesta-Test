<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Barang\BarangController;
use App\Http\Controllers\Home\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::group([
 "middleware" => [
     \App\Http\Middleware\Admin\NonAuthenticationMiddleware::class
 ],
], function () {
   Route::get('/login', [AuthController::class, 'index']);
   Route::post('/login', [AuthController::class, 'login']);
   Route::get('/logout', [AuthController::class, 'logout']);
});

Route::group([
 "middleware" => [
     \App\Http\Middleware\Admin\AuthenticationMiddleware::class
 ],
], function () {
  Route::resource('/', HomeController::class)->only(['index']);
  Route::resource('/barang', BarangController::class)->except(['destroy', 'show']);
});