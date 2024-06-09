<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fornecedor extends Model
{
    use HasFactory;

    protected $table = 'fornecedor';
    protected $primaryKey = 'codFornecedor';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'desFornecedor',
        'cnpj',
        'numContato',
        'estado'
    ];

    public function estado()
    {
        return $this->belongsTo(Estado::class, 'estado', 'codSigla');
    }
}
