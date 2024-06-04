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
        Schema::create('satuan_barang', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('kode', 255)->unique()->index('index_1')->nullable();
            $table->string('nama', 255)->nullable();
        });

        Schema::create('kategori_barang', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('kode', 255)->unique()->index('index_1')->nullable();
            $table->string('nama', 255)->nullable();
        });

        Schema::create('barang', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->integer('id_user_insert')->index('index_1')->nullable();
            $table->foreignId('kategori_barang_id')->nullable()->constrained('kategori_barang');
            $table->foreignId('satuan_barang_id')->nullable()->constrained('satuan_barang');
            $table->string('kode', 255)->unique()->index('index_2')->nullable();
            $table->string('nama', 255)->nullable();
            $table->integer('jumlah')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('satuan_barang');
        Schema::dropIfExists('kategori_barang');
        Schema::dropIfExists('barang');
    }
};
