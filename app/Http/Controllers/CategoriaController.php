<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoriaRequest;
use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriaController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'desCategoria' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $novaCategoria = Categoria::create($request->all());

        return response()->json($novaCategoria, 201);
    }

    public function read(Request $request)
    {
        $query = Categoria::query();

        if ($request->has('codCategoria')) {
            $query->where('codCategoria', $request->codCategoria);
        }

        $categorias = $query->orderBy('codCategoria')->paginate(5);

        return response()->json($categorias, 200);
    }

    public function update(Request $request, $codCategoria)
    {
        $validator = Validator::make($request->all(), [
            'desCategoria' => 'required|string|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $categoria = Categoria::find($codCategoria);
        if (!$categoria) {
            return response()->json(['message' => 'Categoria não encontrada'], 404);
        }

        $categoria->update($request->all());
        return response()->json(['message' => 'Categoria atualizada com sucesso'], 200);
    }

    public function delete($codCategoria)
    {
        $categoria = Categoria::find($codCategoria);
        if (!$categoria) {
            return response()->json(['message' => 'Categoria não encontrada'], 404);
        }

        $categoria->delete();
        return response()->json(['message' => 'Categoria excluída com sucesso'], 200);
    }
}
