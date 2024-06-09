<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('categoria')) {
            Schema::create('categoria', function (Blueprint $table) {
                $table->increments('codCategoria');
                $table->string('desCategoria', 100);
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('categoria');
    }
};
