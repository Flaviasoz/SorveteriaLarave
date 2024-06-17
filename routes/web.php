<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Register');
})->name('register');

Route::get('/estados', function () {
    return Inertia::render('Estados');
})->name('estados');

Route::get('/categorias', function () {
    return Inertia::render('Categorias');
})->name('categorias');

Route::get('/fornecedores', function () {
    return Inertia::render('Fornecedores');
})->name('fornecedores');

Route::get('/produtos', function () {
    return Inertia::render('Produtos');
})->name('produtos');
