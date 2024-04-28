@extends('adminlte::page')
@section('title', 'Cria estados')

@section('content')
    @if ($errors->any())
        <ul class="alert alert-danger">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif
    <div class="container">
        <h2>Criar Categoria</h2>
        {!! Form::open(['route' => 'categoria.store']) !!}
        <div class="form-group">
            {!! Form::label('codCategoria', 'Código Categoria:') !!}
            {!! Form::text('codCategoria', null, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('desCategoria', 'Descrição:') !!}
            {!! Form::text('desCategoria', null, ['class' => 'form-control', 'required']) !!}
        </div>
        <div class="form-group">
            {!! Form::submit('Salvar', ['class' => 'btn btn-primary']) !!}
            {!! Form::reset('Limpar', ['class' => 'btn btn-default']) !!}
        </div>
        {!! Form::close() !!}
    </div>
@stop
