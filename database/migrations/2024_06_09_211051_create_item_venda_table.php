<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemVendaTable extends Migration
{
    public function up()
    {
        Schema::create('item_venda', function (Blueprint $table) {
            $table->unsignedBigInteger('codProduto');
            $table->unsignedBigInteger('vendaSeq');
            $table->integer('qtdProduto');

            $table->foreign('codProduto')
                ->references('codProduto')
                ->on('produto')
                ->onDelete('restrict');

            $table->foreign('vendaSeq')
                ->references('seq')
                ->on('venda')
                ->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::dropIfExists('item_venda');
    }
}
