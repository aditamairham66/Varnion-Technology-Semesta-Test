<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('jenis_kelamin', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('kode', 255)->unique()->index('index_1')->nullable();
            $table->string('jenis_kelamin', 255)->nullable();
        });

        Schema::create('profesi', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('kode', 255)->unique()->index('index_1')->nullable();
            $table->string('nama_profesi')->nullable();
        });

        Schema::create('hasil_response', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->foreignId('jenis_kelamin')->nullable()->constrained('jenis_kelamin');
            $table->string('nama', 255)->nullable();
            $table->string('nama_jalan', 255)->nullable();
            $table->string('email', 255)->nullable();
            $table->string('angka_kurang', 255)->nullable();
            $table->string('angka_lebih', 255)->nullable();
            $table->char('profesi', 1)->nullable()->index('index_1');
            $table->json('plain_json')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('hasil_response');
        Schema::dropIfExists('jenis_kelamin');
        Schema::dropIfExists('profesi');
    }
};
