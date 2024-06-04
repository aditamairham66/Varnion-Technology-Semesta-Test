export interface User {
 id?: number | null;
 name?: string | null;
 email?: string | null;
 email_verified_at?: string | null;
 created_at?: string | null;
 updated_at?: string | null;
}

export interface JenisKelamin {
 id?: number | null;
 kode?: string | null;
 jenis_kelamin?: string | null;
 created_at?: string | null;
 updated_at?: string | null;
 deleted_at?: string | null;
}

export interface Profesi {
 id?: number | null;
 kode?: string | null;
 nama_profesi?: string | null;
 created_at?: string | null;
 updated_at?: string | null;
 deleted_at?: string | null;
}

export interface HasilResponse {
 id?: number | null;
 jenis_kelamin?: JenisKelamin | null;
 nama?: string | null;
 nama_jalan?: string | null;
 email?: string | null;
 angka_kurang?: string | null;
 angka_lebih?: string | null;
 profesi?: Profesi | null;
 plain_json?: any | null;
 created_at?: string | null;
 updated_at?: string | null;
 deleted_at?: string | null;
}

export interface SatuanBarang {
 id?: number | null;
 kode?: string | null;
 nama?: string | null;
 created_at?: string | null;
 updated_at?: string | null;
 deleted_at?: string | null;
}

export interface KategoriBarang {
 id?: number | null;
 kode?: string | null;
 nama?: string | null;
 created_at?: string | null;
 updated_at?: string | null;
 deleted_at?: string | null;
}

export interface Barang {
 id?: number | null;
 id_user_insert?: number | null;
 kategori_barang?: KategoriBarang | null;
 satuan_barang?: SatuanBarang | null;
 kode?: string | null;
 nama?: string | null;
 jumlah?: number | null;
 created_at?: string | null;
 updated_at?: string | null;
 deleted_at?: string | null;
}
