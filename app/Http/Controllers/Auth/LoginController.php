<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    protected function loginValidator(array $data)
    {
        return Validator::make($data, [
            'codUsuario' => ['required'],
            'senha' => ['required', 'min:8'],
        ]);
    }


    public function login(Request $request)
    {
        $validator = $this->loginValidator($request->all());

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = [
            'codUsuario'=>$validator->validated()['codUsuario'],
            'password' => ($validator->validated()['senha'])
        ];

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                'message' => 'Autenticação bem-sucedida',
                'accessToken' => $token,
                'tokenType' => 'Bearer',
                'user' => $user,
            ]);
        }

        return response()->json(['message' => 'Credenciais inválidas'], 401);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json(['message' => 'Usuário desconectado']);
    }
}
