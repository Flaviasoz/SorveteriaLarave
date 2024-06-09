<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemVenda extends Model
{
    use HasFactory;

    protected $table = 'item_venda';
    protected $primaryKey = null;
    public $incrementing = false;
    public $timestamps = false;

    protected $fillable = [
        'codProduto',
        'vendaSeq',
        'qtdProduto'
    ];

    public function produto()
    {
        return $this->belongsTo(Produto::class, 'codProduto', 'codProduto');
    }

    public function venda()
    {
        return $this->belongsTo(Venda::class, 'vendaSeq', 'seq');
    }
}
