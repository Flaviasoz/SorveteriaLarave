<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('estados')) {
        Schema::create('estados', function (Blueprint $table) {
            $table->string('codSigla', 2)->primary();
            $table->string('nome', 100);
            $table->timestamps();
        });
    }
    }

    public function down()
    {
        Schema::dropIfExists('estados');
    }
};
