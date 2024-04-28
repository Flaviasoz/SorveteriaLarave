<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoriaRequest;
use App\Models\Categoria;


class CategoriaController extends Controller
{
    public function index(){
        $categorias = Categoria::orderBy('codCategoria')->paginate(5);
        return view('categoria.index', ['categorias' => $categorias]);
    }
    
    public function create(){
        return view('categoria.create');
    }

    public function store(CategoriaRequest $request) {
        $novo =  $request->all();
        Categoria::create($novo);

        return redirect()->route('categoria');
    }

    public function destroy($codCategoria) {
        Categoria::find($codCategoria)->delete();
        return redirect()->route('categoria');
    }

    public function edit($codCategoria) {
        $categoria = Categoria::find($codCategoria);
        return view('categoria.edit', compact('categoria'));
    }

    public function update(CategoriaRequest $request, $codCategoria) {
        Categoria::find($codCategoria)->update($request->all());
        return redirect()->route('categoria');
    }
}
