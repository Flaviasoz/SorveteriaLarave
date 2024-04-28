<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    protected $table = "estados";
    protected $fillable = ['codSigla', 'nome'];
    protected $primaryKey = 'codSigla';
    public $incrementing = false;
    protected $keyType = 'string';
    use HasFactory;
}
