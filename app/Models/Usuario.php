<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = "Usuario";
    protected $fillable = ['codUsuario', 'nome', 'sobrenome', 'CPF', 'dtaNascimento', 'indAdm', 'senha'];
    protected $primaryKey = 'codUsuario';
    public $incrementing = false;
    use HasFactory;
}
