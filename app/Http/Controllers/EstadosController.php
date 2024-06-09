<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\EstadoRequest;
use App\Models\Estado;
use Illuminate\Http\Request;

class EstadosController extends Controller
{

    public function create(EstadoRequest $request)
    {
        $novoEstado = Estado::create($request->all());

        return response()->json($novoEstado, 201);
    }

    public function read(Request $request)
    {
        $query = Estado::query();

        if ($request->has('codSigla')) {
            $query->where('codSigla', $request->codSigla);
        }

        $estados = $query->orderBy('codSigla')->paginate(5);

        return response()->json($estados, 200);
    }

    public function update(EstadoRequest $request, $codSigla)
    {
        $estado = Estado::find($codSigla);
        if (!$estado) {
            return response()->json(['message' => 'Estado não encontrado'], 404);
        }

        $estado->update($request->all());
        return response()->json(['message' => 'Estado atualizado com sucesso'], 200);
    }

    public function delete($codSigla)
    {
        $estado = Estado::find($codSigla);
        if (!$estado) {
            return response()->json(['message' => 'Estado não encontrado'], 404);
        }

        $estado->delete();
        return response()->json(['message' => 'Estado excluído com sucesso'], 200);
    }
}
