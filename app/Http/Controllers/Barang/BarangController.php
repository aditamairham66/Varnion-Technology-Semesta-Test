<?php

namespace App\Http\Controllers\Barang;

use App\Enums\TypeMessage;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Barang\AddRequest;
use App\Http\Requests\Admin\Barang\EditRequest;
use App\Models\Barang;
use App\Models\HasilResponse;
use App\Models\KategoriBarang;
use App\Models\SatuanBarang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    public function __construct(
        public $title = "Barang"
    )
    {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return inertia('Barang/Index', [
            'title' => $this->title,
            'table' => Barang::query()
                ->with(['KategoriBarang', 'SatuanBarang', 'user'])
                ->when($request->input('q'), function ($query, $search) {
                    $query->where('nama', 'like', '%' . $search . '%');
                    $query->orWhere('nama_jalan', 'like', '%' . $search . '%');
                    $query->orWhere('email', 'like', '%' . $search . '%');
                    $query->whereHas('KategoriBarang', function ($query) use ($search) {
                        $query->where('nama', 'like', '%' . $search . '%');
                    });
                    $query->whereHas('SatuanBarang', function ($query) use ($search) {
                        $query->where('nama', 'like', '%' . $search . '%');
                    });
                })
                ->orderBy('id', 'DESC')
                ->paginate(10),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Barang/Form', [
            'title' => $this->title,
            'form' => new Barang(),
            'kategoriBarang' => KategoriBarang::all(),
            'hasilResponse' => HasilResponse::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(AddRequest $request)
    {
        $satuan = SatuanBarang::where('kode', $request->satuan)->first()->id ?? null;

        $data = [
            'id_user_insert' => 1,
            'kode' => (new Barang())->generateCode(),
            'kategori_barang_id' => $request->kategori,
            'satuan_barang_id' => $satuan,
            'nama' => $request->nama,
            'jumlah' => $request->jumlah,
        ];

        $barang = Barang::create($data);

        return redirect()->route('barang.index')
            ->with([
                'message_type' => TypeMessage::SUCCESS,
                'message' => 'Successfully insert data.',
            ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Barang $barang)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Barang $barang)
    {
        return inertia('Barang/Form', [
            'title' => $this->title,
            'form' => $barang->load(['KategoriBarang', 'SatuanBarang', 'user']),
            'kategoriBarang' => KategoriBarang::all(),
            'hasilResponse' => HasilResponse::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditRequest $request, Barang $barang)
    {
        $satuan = SatuanBarang::where('kode', $request->satuan)->first()->id ?? null;

        $data = [
            'id_user_insert' => 1,
            'kode' => $request->kode,
            'kategori_barang_id' => $request->kategori,
            'satuan_barang_id' => $satuan,
            'nama' => $request->nama,
            'jumlah' => $request->jumlah,
        ];

        $barang->update($data);        

        return redirect()->route('barang.index')
            ->with([
                'message_type' => TypeMessage::SUCCESS,
                'message' => 'Successfully updated data.',
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Barang $barang)
    {
        //
    }
}
