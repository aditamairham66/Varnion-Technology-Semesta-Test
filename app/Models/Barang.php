<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Barang extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = "barang";

    protected $fillable = [
        "id_user_insert",
        "kode",
        "kategori_barang_id",
        "satuan_barang_id",
        "nama",
        "jumlah",
    ];

    public function user() : HasOne {
        return $this->hasOne(HasilResponse::class, 'id', 'id_user_insert');
    }

    public function KategoriBarang() : HasOne {
        return $this->hasOne(KategoriBarang::class, 'id', 'kategori_barang_id');
    }

    public function SatuanBarang() : HasOne {
        return $this->hasOne(SatuanBarang::class, 'id', 'satuan_barang_id');
    }

    public function generateCode()
    {
        $code = "BRG";
        $find = $this->newQuery()
            ->selectRaw(
                "*,
                CAST(REPLACE(kode, '$code', '') AS UNSIGNED) AS ordering"
            )
            ->where('barang.kode', 'LIKE', '%'.$code.'%')
            ->orderBy('ordering', 'DESC')
            ->first();

        if (!empty($find->id)) {
            $number = substr($find->kode, strlen("$code"));
            $code = "$code".sprintf('%03d', $number + 1);
        } else {
            $code = "$code".sprintf('%03d', 1);
        }
        return $code;
    }
}
