@extends('layouts.default')

@section('title', 'Lista Categorias')

@section('content')
    <div class="row" style="padding-top: 20px;">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Lista de Categorias</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Categoria</th>
                                <th style="width: 40%;">Nome</th>
                                <th style="width: 20%;" class="text-center">Editar</th>
                                <th style="width: 20%;" class="text-center">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($categorias as $categoria)
                                <tr>
                                    <td>{{ $categoria->codCategoria }}</td>
                                    <td>{{ $categoria->desCategoria }}</td>
                                    <td class="text-center">
                                        <a href="{{ route('categoria.edit', ['codCategoria' => $categoria->codCategoria]) }}"
                                            class="btn-sm btn-success">Editar</a>
                                    </td>
                                    <td class="text-center">
                                        <a href="#"
                                            onclick="return ConfirmaExclusao('{{ $categoria->codCategoria }}')"
                                            class="btn-sm btn-danger">Excluir</a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="4" class="text-center">Nenhuma categoria encontrada</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    {{ $categorias->links() }}
    <a href="{{ route('categoria.create', []) }}" class="btn btn-info">Adicionar</a>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('table-delete')
    "categoria"
@stop
