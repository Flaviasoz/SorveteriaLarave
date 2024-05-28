@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Registrar') }}</div>

                    <div class="card-body">
                        <form method="POST" action="{{ route('register') }}">
                            @csrf

                            <div class="row mb-3">
                                <label for="nome" class="col-md-4 col-form-label text-md-end">{{ __('Nome') }}</label>

                                <div class="col-md-6">
                                    <input id="nome" type="text"
                                        class="form-control @error('nome') is-invalid @enderror" name="nome"
                                        value="{{ old('nome') }}" required autocomplete="nome" autofocus>

                                    @error('nome')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="senha"
                                    class="col-md-4 col-form-label text-md-end">{{ __('Senha') }}</label>

                                <div class="col-md-6">
                                    <input id="senha" type="password"
                                        class="form-control @error('senha') is-invalid @enderror" name="senha" required
                                        autocomplete="new-password">

                                    @error('senha')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="sobrenome"
                                    class="col-md-4 col-form-label text-md-end">{{ __('Sobrenome') }}</label>

                                <div class="col-md-6">
                                    <input id="sobrenome" type="text"
                                        class="form-control @error('sobrenome') is-invalid @enderror" name="sobrenome"
                                        value="{{ old('sobrenome') }}" required autocomplete="sobrenome">

                                    @error('sobrenome')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="CPF"
                                    class="col-md-4 col-form-label text-md-end">{{ __('CPF') }}</label>

                                <div class="col-md-6">
                                    <input id="CPF" type="text"
                                        class="form-control @error('CPF') is-invalid @enderror" name="CPF"
                                        value="{{ old('CPF') }}" required autocomplete="CPF">

                                    @error('CPF')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="dtaNascimento"
                                    class="col-md-4 col-form-label text-md-end">{{ __('Data de Nascimento') }}</label>

                                <div class="col-md-6">
                                    <input id="dtaNascimento" type="date"
                                        class="form-control @error('dtaNascimento') is-invalid @enderror"
                                        name="dtaNascimento" value="{{ old('dtaNascimento') }}" required
                                        autocomplete="dtaNascimento">

                                    @error('dtaNascimento')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="indAdm"
                                    class="col-md-4 col-form-label text-md-end">{{ __('Administrador') }}</label>

                                <div class="col-md-6">
                                    <select id="indAdm" class="form-select @error('indAdm') is-invalid @enderror"
                                        name="indAdm" required>
                                        <option value="1" @if (old('indAdm') == 1) selected @endif>
                                            {{ __('Sim') }}</option>
                                        <option value="0" @if (old('indAdm') == 0) selected @endif>
                                            {{ __('Não') }}</option>
                                    </select>

                                    @error('indAdm')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Registrar') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
