<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Estado;

class EstadosController extends Controller
{
    public function index(){
        $estados = Estado::all();
        return view('estados.index', ['estados' => $estados]);
    }
}
