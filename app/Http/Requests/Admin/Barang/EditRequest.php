<?php

namespace App\Http\Requests\Admin\Barang;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EditRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $barangId = $this->route('barang') ? $this->route('barang')->id : null;

        return [
            'kode' => [
                "required",
                Rule::unique('barang', 'kode')->ignore($barangId),
            ],
            'user' => 'required|exists:hasil_response,id',
            'kategori' => 'required|exists:kategori_barang,id',
            'satuan' => 'required|exists:satuan_barang,kode',
            'nama' =>  [
                "required",
                Rule::unique('barang', 'nama')->ignore($barangId),
            ],
            'jumlah' => 'required|integer|between:1,100',
        ];
    }
}
