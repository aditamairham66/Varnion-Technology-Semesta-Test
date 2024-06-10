<?php

namespace Database\Seeders;

use App\Models\HasilResponse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AddPasswordHasilResponseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = HasilResponse::all();

        foreach ($data as $val) {
            $val->password = Hash::make('123456');
            $val->save();
        }

        $this->command->info('Success add password');
    }
}
