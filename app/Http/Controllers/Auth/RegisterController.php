<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = '/home';

    public function __construct()
    {
        $this->middleware('guest');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'nome' => ['required', 'string', 'max:255'],
            'sobrenome' => ['required', 'string', 'max:255'],
            'CPF' => ['required', 'string', 'max:14', 'unique:usuario,CPF'],
            'dtaNascimento' => ['required', 'date'],
            'senha' => ['required', 'string', 'min:8'],
            'indAdm' => ['required', 'integer', 'in:0,1'],
        ]);
    }

    protected function create(array $data)
    {
        return User::create([
            'nome' => $data['nome'],
            'sobrenome' => $data['sobrenome'],
            'CPF' => $data['CPF'],
            'dtaNascimento' => $data['dtaNascimento'],
            'senha' => Hash::make($data['senha']),
            'indAdm' => $data['indAdm'],
        ]);
    }



    public function register(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            return response()->json(['message' => 'Erro de validação', 'errors' => $validator->errors()], 422);
        }

        $user = $this->create($request->all());
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'accessToken' => $token,
            'tokenType' => 'Bearer',
            'user' => $user
        ], 201);
    }
}
