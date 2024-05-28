<?php

use App\Http\Controllers\EstadosController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['prefix'=>'estados', 'where' => ['codSigla' => '[a-zA-Z]+']], function() {
    Route::get ('',                   ['as'=>'estados',         'uses'=>'EstadosController@index'  ]);
    Route::get ('create',             ['as'=>'estados.create',  'uses'=>'EstadosController@create' ]);
    Route::get ('{codSigla}/destroy', ['as'=>'estados.destroy', 'uses'=>'EstadosController@destroy']);
    Route::get ('{codSigla}/edit',    ['as'=>'estados.edit',    'uses'=>'EstadosController@edit'   ]);
    Route::put ('{codSigla}/update',  ['as'=>'estados.update',  'uses'=>'EstadosController@update' ]);
    Route::post('store',              ['as'=>'estados.store',   'uses'=>'EstadosController@store'  ]);
});

Route::group(['prefix'=>'categoria', 'where' => ['codCategoria' => '[0-9]+']], function() {
    Route::get ('',                       ['as'=>'categoria',         'uses'=>'CategoriaController@index'  ]);
    Route::get ('create',                 ['as'=>'categoria.create',  'uses'=>'CategoriaController@create' ]);
    Route::get ('{codCategoria}/destroy', ['as'=>'categoria.destroy', 'uses'=>'CategoriaController@destroy']);
    Route::get ('{codCategoria}/edit',    ['as'=>'categoria.edit',    'uses'=>'CategoriaController@edit'   ]);
    Route::put ('{codCategoria}/update',  ['as'=>'categoria.update',  'uses'=>'CategoriaController@update' ]);
    Route::post('store',                  ['as'=>'categoria.store',   'uses'=>'CategoriaController@store'  ]);
});

// Route::group(['prefix'=>'usuarios', 'where' => ['codUsuario' => '[0-9]+']], function() {
//     Route::get ('',                       ['as'=>'usuarios',         'uses'=>'UsuarioController@index'  ]);
//     Route::get ('create',                 ['as'=>'usuarios.create',  'uses'=>'UsuarioController@create' ]);
//     Route::get ('{codUsuario}/destroy',    ['as'=>'usuarios.destroy', 'uses'=>'UsuarioController@destroy']);
//     Route::get ('{codUsuario}/edit',       ['as'=>'usuarios.edit',    'uses'=>'UsuarioController@edit'   ]);
//     Route::put ('{codUsuario}/update',     ['as'=>'usuarios.update',  'uses'=>'UsuarioController@update' ]);
//     Route::post('store',                   ['as'=>'usuarios.store',   'uses'=>'UsuarioController@store'  ]);
// });




