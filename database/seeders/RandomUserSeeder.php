<?php

namespace Database\Seeders;

use App\Models\HasilResponse;
use App\RandomUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RandomUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Illuminate\Support\Facades\Schema::disableForeignKeyConstraints();
        \Illuminate\Support\Facades\DB::table('hasil_response')->truncate();
        \Illuminate\Support\Facades\Schema::enableForeignKeyConstraints();

        $this->command->info("Staring get data from api point.....");

        $randomUser = new RandomUser();
        $data = $randomUser->fetchData(1, 45);
        
        if ($data && isset($data['results'])) {
            foreach ($data['results'] as $user) {
                $gender = $user['gender'] === 'female' ? 2 : 1;
                $name = $user['name']['first'] . ' ' . $user['name']['last'];
                $street = $user['location']['street']['name'];
                $email = $user['email'];
                $md5 = $user['login']['md5'];

                $angka_kurang = 0;
                $angka_lebih = 0;

                foreach (str_split($md5) as $char) {
                    if (is_numeric($char)) {
                        if ($char < 7) {
                            $angka_kurang++;
                        } elseif ($char > 7) {
                            $angka_lebih++;
                        }
                    }
                }

                $profesi = chr(rand(65, 69)); // Random character between A and E

                HasilResponse::create([
                    'jenis_kelamin' => $gender,
                    'nama' => $name,
                    'nama_jalan' => $street,
                    'email' => $email,
                    'angka_kurang' => $angka_kurang,
                    'angka_lebih' => $angka_lebih,
                    'profesi' => $profesi,
                    'plain_json' => json_encode($user),
                ]);
            }
        }
   
        $this->command->info("Getting data from api is done.");
    
    }
}
