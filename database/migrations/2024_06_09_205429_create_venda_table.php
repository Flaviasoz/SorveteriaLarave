<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVendaTable extends Migration
{
    public function up()
    {
        Schema::create('venda', function (Blueprint $table) {
            $table->id('seq');
            $table->integer('numCupom');
            $table->date('dtaVenda');
            $table->decimal('valorTotal', 8, 2);
            $table->unsignedInteger('codUsuario');
            $table->timestamps();

            $table->foreign('codUsuario')
                  ->references('codUsuario')
                  ->on('usuario')
                  ->onDelete('restrict');
        });
    }

    public function down()
    {
        Schema::dropIfExists('venda');
    }
}
