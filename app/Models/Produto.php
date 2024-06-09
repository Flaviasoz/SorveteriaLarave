<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $table = 'produto';
    protected $primaryKey = 'codProduto';
    public $incrementing = true;
    protected $keyType = 'int';

    protected $fillable = [
        'desProduto',
        'valor',
        'estoque',
        'estoqueMinimo',
        'codFornecedor',
        'codCategoria'
    ];

    public function fornecedor()
    {
        return $this->belongsTo(Fornecedor::class, 'codFornecedor', 'codFornecedor');
    }

    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'codCategoria', 'codCategoria');
    }
}
