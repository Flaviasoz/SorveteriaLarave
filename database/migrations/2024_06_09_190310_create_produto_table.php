<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdutoTable extends Migration
{
    public function up()
    {
        Schema::create('produto', function (Blueprint $table) {
            $table->id('codProduto');
            $table->string('desProduto', 50);
            $table->decimal('valor', 8, 2);
            $table->integer('estoque');
            $table->integer('estoqueMinimo');
            $table->unsignedBigInteger('codFornecedor');
            $table->unsignedBigInteger('codCategoria');
            $table->timestamps();

            $table->foreign('codFornecedor')
                  ->references('codFornecedor')
                  ->on('fornecedor')
                  ->onDelete('restrict');

            $table->foreign('codCategoria')
                  ->references('codCategoria')
                  ->on('categoria')
                  ->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::dropIfExists('produto');
    }
}
