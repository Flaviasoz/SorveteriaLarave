<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('usuario')) {
        Schema::create('usuario', function (Blueprint $table) {
            $table->bigInteger('codUsuario');
            $table->string('nome');
            $table->string('sobrenome');
            $table->string('CPF');
            $table->date('dtaNascimento');
            $table->boolean('indAdm');
            $table->string('senha');
            $table->timestamps();

            $table->primary('codUsuario');
        });
    }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuario');
    }
};
