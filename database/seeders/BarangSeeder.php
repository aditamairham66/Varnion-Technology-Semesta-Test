<?php

namespace Database\Seeders;

use App\Models\Barang;
use App\Models\KategoriBarang;
use App\Models\SatuanBarang;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BarangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('satuan_barang')->truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $data = [
            ['kode' => 'kg', 'nama' => 'Kilogram', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['kode' => 'm', 'nama' => 'Meter', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['kode' => 'lt', 'nama' => 'Liter', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        SatuanBarang::insert($data);

        $this->command->info("Done Create Satuan Barang");

        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('kategori_barang')->truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $data = [
            ['kode' => 'kts', 'nama' => 'Kitchen set', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['kode' => 'bds', 'nama' => 'Bedroom set', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['kode' => 'fms', 'nama' => 'Family room set', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];

        KategoriBarang::insert($data);

        $this->command->info("Done Create Kategori Barang");


        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('barang')->truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $data = [
            'id_user_insert' => 1, 
            'kategori_barang_id' => 1,
            'satuan_barang_id' => 1,
            'kode' => "BRG001",
            'nama' => "Karpet",
            'jumlah' => "10",
        ];

        Barang::create($data);

        $this->command->info("Done Create Barang");
    }
}
