<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = "usuario";
    protected $primaryKey = 'codUsuario';
    public $incrementing = true;

    protected $fillable = [
        'nome',
        'senha',
        'sobrenome',
        'CPF',
        'dtaNascimento',
        'indAdm',
    ];

    protected $hidden = [
        'senha',
    ];

    public function getAuthPassword()
    {
        return $this->senha;
    }
}
