<?php

namespace Database\Seeders;

use App\Models\JenisKelamin;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class JenisKelaminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('jenis_kelamin')->truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $data = [
            ['kode' => 'KL001', 'jenis_kelamin' => 'Laki-laki', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['kode' => 'KL002', 'jenis_kelamin' => 'Perempuan', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()]
        ];

        JenisKelamin::insert($data);

        $this->command->info("Done Create Jenis Kelamin");
    }
}
