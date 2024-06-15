<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');;
