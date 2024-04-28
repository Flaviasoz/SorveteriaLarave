<?php

namespace App\Http\Controllers;

use App\Http\Requests\EstadoRequest;
use App\Models\Estado;

class EstadosController extends Controller
{
    public function index(){
        $estados = Estado::orderBy('codSigla')->paginate(5);
        return view('estados.index', ['estados' => $estados]);
    }

    public function create(){
        return view('estados.create');
    }

    public function store(EstadoRequest $request) {
        $novo =  $request->all();
        Estado::create($novo);

        return redirect()->route('estados');
    }

    public function destroy($codSigla) {
        Estado::find($codSigla)->delete();
        return redirect()->route('estados');
    }

    public function edit($codSigla) {
        $estado = Estado::find($codSigla);
        return view('estados.edit', compact('estado'));
    }

    public function update(EstadoRequest $request, $codSigla) {
        Estado::find($codSigla)->update($request->all());
        return redirect()->route('estados');
    }
}
