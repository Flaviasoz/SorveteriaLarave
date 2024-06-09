<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFornecedorTable extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('fornecedor')) {
            Schema::create('fornecedor', function (Blueprint $table) {
                $table->id('codFornecedor');
                $table->string('desFornecedor', 50);
                $table->string('cnpj', 16);
                $table->string('numContato', 20);
                $table->string('estado', 2);
                $table->timestamps();

                $table->foreign('estado')
                    ->references('codSigla')
                    ->on('estados')
                    ->onDelete('restrict');
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('fornecedor');
    }
}
