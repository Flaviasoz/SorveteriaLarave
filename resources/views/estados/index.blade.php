@extends('adminlte::page')

@section('title', 'Tabela Personalizada')

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
                                <th>ID</th>
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
                                        <button class="btn btn-sm btn-primary">Editar</button>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-sm btn-danger">Excluir</button>
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
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop
