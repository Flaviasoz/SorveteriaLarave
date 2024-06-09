'<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioTable extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('usuario')) {
            Schema::create('usuario', function (Blueprint $table) {
                $table->increments('codUsuario');
                $table->string('nome');
                $table->string('sobrenome');
                $table->string('CPF')->unique();
                $table->date('dtaNascimento');
                $table->string('senha');
                $table->tinyInteger('indAdm');
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('usuario');
    }
}

