<?php

namespace Database\Seeders;

use App\Models\Profesi;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfesiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('profesi')->truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $profesiList = ['Guru', 'Dokter', 'Insinyur', 'Pengacara', 'Pilot'];

        $data = [];

        foreach (range('A', 'E') as $index => $kode) {
            $data[] = [
                'kode' => $kode,
                'nama_profesi' => $profesiList[$index],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ];
        }

        Profesi::insert($data);

        $this->command->info("Done Create Profesi");
    }
}
