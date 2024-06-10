<?php

namespace App\Http\Requests\Admin\Barang;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class AddRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user' => 'required|exists:hasil_response,id',
            'kategori' => 'required|exists:kategori_barang,id',
            'satuan' => 'required|exists:satuan_barang,kode',
            'nama' => 'required|unique:barang,nama',
            'jumlah' => 'required|integer|between:1,100',
        ];
    }
}
