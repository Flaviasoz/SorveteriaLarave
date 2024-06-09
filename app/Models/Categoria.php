<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $table = "categoria";
    protected $fillable = ['codCategoria', 'desCategoria'];
    protected $primaryKey = 'codCategoria';
    public $incrementing = true;
}
