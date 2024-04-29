@extends('layouts.default')

@section('title', 'Lista de Usuários')

@section('content')
    <div class="row" style="padding-top: 20px;">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">Lista de Usuários</h3>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>CPF</th>
                                <th>Data de Nascimento</th>
                                <th>Administrador</th>
                                <th style="width: 20%;" class="text-center">Editar</th>
                                <th style="width: 20%;" class="text-center">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse ($usuarios as $usuario)
                                <tr>
                                    <td>{{ $usuario->codUsuario }}</td>
                                    <td>{{ $usuario->nome }}</td>
                                    <td>{{ $usuario->sobrenome }}</td>
                                    <td>{{ $usuario->CPF }}</td>
                                    <td>{{ $usuario->dtaNascimento }}</td>
                                    <td>{{ $usuario->indAdm == 1 ? 'Sim' : 'Não' }}</td>
                                    <td class="text-center">
                                        <a href="{{ route('usuarios.edit', ['codUsuario' => $usuario->codUsuario]) }}"
                                            class="btn-sm btn-success">Editar</a>
                                    </td>
                                    <td class="text-center">
                                        <a href="#" onclick="return ConfirmaExclusao('{{ $usuario->codUsuario }}')"
                                            class="btn-sm btn-danger">Excluir</a>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="8" class="text-center">Nenhum usuário encontrado</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    {{ $usuarios->links() }}
    <a href="{{ route('usuarios.create', []) }}" class="btn btn-info">Adicionar</a>
@stop

@section('css')
    <link rel="stylesheet" href="/css/admin_custom.css">
@stop

@section('table-delete')
    "usuarios"
@stop
