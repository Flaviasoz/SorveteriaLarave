@extends('adminlte::page')
@section('title', 'Criar Usuário')

@section('content')
    @if ($errors->any())
        <ul class="alert alert-danger">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif
    <div class="container">
        <h2>Criar Usuário</h2>
        {!! Form::open(['route' => 'usuarios.store']) !!}
        <div class="form-group">
            {!! Form::label('codUsuario', 'Codigo:') !!}
            {!! Form::text('codUsuario', null, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('nome', 'Nome:') !!}
            {!! Form::text('nome', null, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('sobrenome', 'Sobrenome:') !!}
            {!! Form::text('sobrenome', null, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('CPF', 'CPF:') !!}
            {!! Form::text('CPF', null, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('dtaNascimento', 'Data de Nascimento:') !!}
            {!! Form::date('dtaNascimento', null, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('indAdm', 'Administrador:') !!}
            {!! Form::select('indAdm', ['1' => 'Sim', '0' => 'Não'], null, ['class' => 'form-control', 'required']) !!}
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
