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
        if (Schema::hasTable('hasil_response')) {
            Schema::table('hasil_response', function (Blueprint $table) {
                $table->string('password', 255)->nullable()->after('email');
            });        
        }

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        if (Schema::hasTable('hasil_response')) {
            Schema::table('hasil_response', function (Blueprint $table) {
                $table->dropColumn('password');
            });
        }
    }
};
