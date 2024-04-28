@extends('layouts.default')

@section('title', 'Lista Estados')

@section('content')
    <div class="row" style="padding-top: 20px;">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Lista de Estados</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Sigla</th>
                                <th style="width: 40%;">Nome</th>
                                <th style="width: 20%;" class="text-center">Editar</th>
                                <th style="width: 20%;" class="text-center">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($estados as $estado)
                                <tr>
                                    <td>{{ $estado->codSigla }}</td>
                                    <td>{{ $estado->nome }}</td>
                                    <td class="text-center">
                                        <a href="{{ route('estados.edit', ['codSigla' => $estado->codSigla]) }}"
                                            class="btn-sm btn-success">Editar</a>
                                    </td>
                                    <td class="text-center">
                                        <a href="#" onclick="return ConfirmaExclusao('{{ $estado->codSigla }}')"
                                            class="btn-sm btn-danger">Excluir</a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="4" class="text-center">Nenhum estado encontrado</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    {{ $estados->links() }}
    <a href="{{ route('estados.create', []) }}" class="btn btn-info">Adicionar</a>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('table-delete')
    "estados"
@stop
