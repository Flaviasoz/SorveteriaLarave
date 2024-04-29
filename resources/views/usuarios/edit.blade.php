@extends('adminlte::page')
@section('title', 'Editar Usuário')

@section('content')
    @if ($errors->any())
        <ul class="alert alert-danger">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif
    <div class="container">
        <h2>Editando Usuário: {{ $usuario->nome }}</h2>
        {!! Form::open(['route' => ['usuarios.update', 'codUsuario' => $usuario->codUsuario], 'method' => 'put']) !!}
        <div class="form-group">
            {!! Form::label('nome', 'Nome:') !!}
            {!! Form::text('nome', $usuario->nome, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('sobrenome', 'Sobrenome:') !!}
            {!! Form::text('sobrenome', $usuario->sobrenome, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('CPF', 'CPF:') !!}
            {!! Form::text('CPF', $usuario->CPF, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('dtaNascimento', 'Data de Nascimento:') !!}
            {!! Form::date('dtaNascimento', $usuario->dtaNascimento, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('indAdm', 'Administrador:') !!}
            {!! Form::select('indAdm', ['1' => 'Sim', '0' => 'Não'], $usuario->indAdm, [
                'class' => 'form-control',
                'required',
            ]) !!}
        </div>
        <div class="form-group">
            {!! Form::label('senha', 'Senha:') !!}
            {!! Form::password('senha', ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::submit('Salvar', ['class' => 'btn btn-primary']) !!}
            {!! Form::reset('Limpar', ['class' => 'btn btn-default']) !!}
        </div>
        {!! Form::close() !!}
    </div>
@stop
