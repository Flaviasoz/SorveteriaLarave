<?php

namespace App\Http\Controllers;

use App\Models\Fornecedor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FornecedorController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'desFornecedor' => 'required|string|max:50',
            'cnpj' => 'required|string|max:16',
            'numContato' => 'required|string|max:20',
            'estado' => 'required|string|max:2|exists:estados,codSigla',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $novoFornecedor = Fornecedor::create($request->all());

        return response()->json($novoFornecedor, 201);
    }

    public function read(Request $request)
    {
        $query = Fornecedor::query();

        if ($request->has('codFornecedor')) {
            $query->where('codFornecedor', $request->codFornecedor);
        }

        $fornecedores = $query->orderBy('codFornecedor')->paginate(5);

        return response()->json($fornecedores, 200);
    }

    public function update(Request $request, $codFornecedor)
    {
        $validator = Validator::make($request->all(), [
            'desFornecedor' => 'required|string|max:50',
            'cnpj' => 'required|string|max:16',
            'numContato' => 'required|string|max:20',
            'estado' => 'required|string|max:2|exists:estados,codSigla',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $fornecedor = Fornecedor::find($codFornecedor);
        if (!$fornecedor) {
            return response()->json(['message' => 'Fornecedor não encontrado'], 404);
        }

        $fornecedor->update($request->all());
        return response()->json(['message' => 'Fornecedor atualizado com sucesso'], 200);
    }

    public function delete($codFornecedor)
    {
        $fornecedor = Fornecedor::find($codFornecedor);
        if (!$fornecedor) {
            return response()->json(['message' => 'Fornecedor não encontrado'], 404);
        }

        $fornecedor->delete();
        return response()->json(['message' => 'Fornecedor excluído com sucesso'], 200);
    }
}
