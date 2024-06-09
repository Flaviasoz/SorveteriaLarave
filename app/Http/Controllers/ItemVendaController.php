<?php

namespace App\Http\Controllers;

use App\Models\ItemVenda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ItemVendaController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'codProduto' => 'required|integer|exists:produtos,codProduto',
            'vendaSeq' => 'required|integer|exists:venda,seq',
            'qtdProduto' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $novoItemVenda = ItemVenda::create($request->all());

        return response()->json($novoItemVenda, 201);
    }

    public function read(Request $request)
    {
        $query = ItemVenda::query();

        if ($request->has('codProduto')) {
            $query->where('codProduto', $request->codProduto);
        }

        if ($request->has('vendaSeq')) {
            $query->where('vendaSeq', $request->vendaSeq);
        }

        $itensVenda = $query->orderBy('codProduto')->paginate(5);

        return response()->json($itensVenda, 200);
    }

    public function update(Request $request, $id)
    {
        $itemVenda = ItemVenda::find($id);
        if (!$itemVenda) {
            return response()->json(['message' => 'Item de venda não encontrado'], 404);
        }

        $validator = Validator::make($request->all(), [
            'codProduto' => 'required|integer|exists:produtos,codProduto',
            'vendaSeq' => 'required|integer|exists:venda,seq',
            'qtdProduto' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $itemVenda->update($request->all());
        return response()->json(['message' => 'Item de venda atualizado com sucesso'], 200);
    }

    public function delete($id)
    {
        $itemVenda = ItemVenda::find($id);
        if (!$itemVenda) {
            return response()->json(['message' => 'Item de venda não encontrado'], 404);
        }

        $itemVenda->delete();
        return response()->json(['message' => 'Item de venda excluído com sucesso'], 200);
    }
}
