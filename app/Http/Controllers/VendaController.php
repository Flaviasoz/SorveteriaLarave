<?php

namespace App\Http\Controllers;

use App\Models\Venda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VendaController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'numCupom' => 'required|integer',
            'dtaVenda' => 'required|date',
            'valorTotal' => 'required|numeric|between:0,99999999.99',
            'codUsuario' => 'required|integer|exists:usuarios,codUsuario',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $novaVenda = Venda::create($request->all());

        return response()->json($novaVenda, 201);
    }

    public function read(Request $request)
    {
        $query = Venda::query();

        if ($request->has('seq')) {
            $query->where('seq', $request->seq);
        }

        $vendas = $query->orderBy('seq')->paginate(5);

        return response()->json($vendas, 200);
    }

    public function update(Request $request, $seq)
    {
        $validator = Validator::make($request->all(), [
            'numCupom' => 'required|integer',
            'dtaVenda' => 'required|date',
            'valorTotal' => 'required|numeric|between:0,99999999.99',
            'codUsuario' => 'required|integer|exists:usuarios,codUsuario',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Campos faltando ou inválidos', 'errors' => $validator->errors()], 400);
        }

        $venda = Venda::find($seq);
        if (!$venda) {
            return response()->json(['message' => 'Venda não encontrada'], 404);
        }

        $venda->update($request->all());
        return response()->json(['message' => 'Venda atualizada com sucesso'], 200);
    }

    public function delete($seq)
    {
        $venda = Venda::find($seq);
        if (!$venda) {
            return response()->json(['message' => 'Venda não encontrada'], 404);
        }

        $venda->delete();
        return response()->json(['message' => 'Venda excluída com sucesso'], 200);
    }
}
