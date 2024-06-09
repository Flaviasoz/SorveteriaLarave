<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venda extends Model
{
    use HasFactory;

    protected $table = 'venda';
    protected $primaryKey = 'seq';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'numCupom',
        'dtaVenda',
        'valorTotal',
        'codUsuario'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'codUsuario', 'codUsuario');
    }
}
