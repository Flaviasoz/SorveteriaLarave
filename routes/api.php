<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\EstadosController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\FornecedorController;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\VendaController;
use App\Http\Controllers\ItemVendaController;

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    // estados
    Route::post('/estados', [EstadosController::class, 'create'])->name('estados.create');
    Route::get('/estados', [EstadosController::class, 'read'])->name('estados.read');
    Route::put('/estados/{codSigla}', [EstadosController::class, 'update'])->name('estados.update');
    Route::delete('/estados/{codSigla}', [EstadosController::class, 'delete'])->name('estados.delete');
    // categorias
    Route::post('/categorias', [CategoriaController::class, 'create'])->name('categorias.create');
    Route::get('/categorias', [CategoriaController::class, 'read'])->name('categorias.read');
    Route::put('/categorias/{codCategoria}', [CategoriaController::class, 'update'])->name('categorias.update');
    Route::delete('/categorias/{codCategoria}', [CategoriaController::class, 'delete'])->name('categorias.delete');
    // fornecedores
    Route::post('/fornecedores', [FornecedorController::class, 'create'])->name('fornecedores.create');
    Route::get('/fornecedores', [FornecedorController::class, 'read'])->name('fornecedores.read');
    Route::put('/fornecedores/{codFornecedor}', [FornecedorController::class, 'update'])->name('fornecedores.update');
    Route::delete('/fornecedores/{codFornecedor}', [FornecedorController::class, 'delete'])->name('fornecedores.delete');
    // produtos
    Route::post('/produtos', [ProdutoController::class, 'create'])->name('produtos.create');
    Route::get('/produtos', [ProdutoController::class, 'read'])->name('produtos.read');
    Route::put('/produtos/{codProduto}', [ProdutoController::class, 'update'])->name('produtos.update');
    Route::delete('/produtos/{codProduto}', [ProdutoController::class, 'delete'])->name('produtos.delete');
    // vendas
    Route::post('/vendas', [VendaController::class, 'create'])->name('vendas.create');
    Route::get('/vendas', [VendaController::class, 'read'])->name('vendas.read');
    Route::put('/vendas/{seq}', [VendaController::class, 'update'])->name('vendas.update');
    Route::delete('/vendas/{seq}', [VendaController::class, 'delete'])->name('vendas.delete');
    // items-vendas
    Route::post('/item-venda', [ItemVendaController::class, 'create'])->name('item-venda.create');
    Route::get('/item-venda', [ItemVendaController::class, 'read'])->name('item-venda.read');
    Route::put('/item-venda/{id}', [ItemVendaController::class, 'update'])->name('item-venda.update');
    Route::delete('/item-venda/{id}', [ItemVendaController::class, 'delete'])->name('item-venda.delete');
    // logout
    Route::post('/logout', [LoginController::class, 'logout']);
});

Route::get('/test', function () {
    return response()->json(['message' => 'API is working']);
});
