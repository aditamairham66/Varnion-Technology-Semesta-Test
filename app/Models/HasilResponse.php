<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;

class HasilResponse extends Authenticatable
{
    use HasFactory, SoftDeletes;

    protected $table = "hasil_response";

    public function JenisKelamin() : HasOne {
        return $this->hasOne(JenisKelamin::class, 'id', 'jenis_kelamin');
    }

    public function Profesi() : HasOne {
        return $this->hasOne(Profesi::class, 'kode', 'profesi');
    }
}
