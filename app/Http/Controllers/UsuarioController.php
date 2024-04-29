<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsuarioRequest;
use App\Models\Usuario;

class UsuarioController extends Controller
{
    public function index(){
        $usuarios = Usuario::orderBy('codUsuario')->paginate(5);
        return view('usuarios.index', ['usuarios' => $usuarios]);
    }

    public function create(){
        return view('usuarios.create');
    }

    public function store(UsuarioRequest $request) {
        $novo =  $request->all();
        Usuario::create($novo);

        return redirect()->route('usuarios');
    }

    public function destroy($codUsuario) {
        Usuario::find($codUsuario)->delete();
        return redirect()->route('usuarios');
    }

    public function edit($codUsuario) {
        $usuario = Usuario::find($codUsuario);
        return view('usuarios.edit', compact('usuario'));
    }

    public function update(UsuarioRequest $request, $codUsuario) {
        Usuario::find($codUsuario)->update($request->all());
        return redirect()->route('usuarios');
    }
}
