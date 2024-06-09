<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProdutoController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'desProduto' => 'required|string|max:50',
            'valor' => 'required|numeric|between:0,99999999.99',
            'estoque' => 'required|integer',
            'estoqueMinimo' => 'required|integer',
            'codFornecedor' => 'required|integer|exists:fornecedor,codFornecedor',
            'codCategoria' => 'required|integer|exists:categoria,codCategoria',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $novoProduto = Produto::create($request->all());

        return response()->json($novoProduto, 201);
    }

    public function read(Request $request)
    {
        $query = Produto::query();

        if ($request->has('codProduto')) {
            $query->where('codProduto', $request->codProduto);
        }

        $produtos = $query->orderBy('codProduto')->paginate(5);

        return response()->json($produtos, 200);
    }

    public function update(Request $request, $codProduto)
    {
        $validator = Validator::make($request->all(), [
            'desProduto' => 'required|string|max:50',
            'valor' => 'required|numeric|between:0,99999999.99',
            'estoque' => 'required|integer',
            'estoqueMinimo' => 'required|integer',
            'codFornecedor' => 'required|integer|exists:fornecedor,codFornecedor',
            'codCategoria' => 'required|integer|exists:categoria,codCategoria',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $produto = Produto::find($codProduto);
        if (!$produto) {
            return response()->json(['message' => 'Produto não encontrado'], 404);
        }

        $produto->update($request->all());
        return response()->json(['message' => 'Produto atualizado com sucesso'], 200);
    }

    public function delete($codProduto)
    {
        $produto = Produto::find($codProduto);
        if (!$produto) {
            return response()->json(['message' => 'Produto não encontrado'], 404);
        }

        $produto->delete();
        return response()->json(['message' => 'Produto excluído com sucesso'], 200);
    }
}
