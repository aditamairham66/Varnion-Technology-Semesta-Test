<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\HasilResponse;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function __construct(
        public $title = "Dashboard"
    )
    {}
    
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return inertia('Home/Index', [
            'title' => $this->title,
            'table' => HasilResponse::query()
                ->with(['JenisKelamin', 'Profesi'])
                ->when($request->input('q'), function ($query, $search) {
                    $query->where('nama', 'like', '%' . $search . '%');
                    $query->orWhere('nama_jalan', 'like', '%' . $search . '%');
                    $query->orWhere('email', 'like', '%' . $search . '%');
                    $query->whereHas('JenisKelamin', function ($query) use ($search) {
                        $query->where('jenis_kelamin', 'like', '%' . $search . '%');
                    });
                    $query->whereHas('Profesi', function ($query) use ($search) {
                        $query->where('nama_profesi', 'like', '%' . $search . '%');
                    });
                })
                ->orderBy('id', 'DESC')
                ->paginate(10),
        ]);
    }
}
