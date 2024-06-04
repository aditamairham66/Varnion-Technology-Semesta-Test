import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/inertia-react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Barang, HasilResponse, KategoriBarang } from '@/types';
import { Inertia } from '@inertiajs/inertia';

interface PageProps {
    title: string;
    form: Barang;
    kategoriBarang: KategoriBarang[];
    hasilResponse: HasilResponse[];
    errors: {
        kode?: string;
        user?: string;
        kategori?: string;
        satuan?: string;
        nama?: string;
        jumlah?: string;
    };
}

const BarangForm: React.FC = () => {
    // @ts-ignore
    const { props } = usePage<PageProps>();
    const { title, form, kategoriBarang, hasilResponse, errors } = props;

    const { data, setData } = useForm({
        kode: form.kode || '',
        user: form.user?.id || '',
        kategori: form.kategori_barang?.id || '',
        satuan: form.satuan_barang?.kode || '',
        nama: form.nama || '',
        jumlah: form.jumlah || '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.id) {
          Inertia.post('/barang', data, { forceFormData: true });
        } else {
          Inertia.post(`/barang/${form.id}?_method=PUT`, data, { forceFormData: true });
        }
    };

    return (
        <AdminLayout>
            <Head title={`${!form.title ? 'Add': 'Edit'} ${title}`} />

            <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                <div className="card p-6">
                    <div className="flex justify-between items-center mb-4">
                        <p className="card-title">{`${!form.title ? 'Add': 'Edit'} ${title}`}</p>
                    </div>

                    {form.kode && (
                        <div>
                            <label className="self-stretch h-[18px] text-xs font-semibold font-['Poppins']">
                                Kode <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="kode"
                                id="kode"
                                className="form-input mt-1"
                                placeholder="Enter Title"
                                aria-describedby="input-helper-text"
                                value={data.kode}
                                onChange={handleInputChange}
                            />
                            {errors.kode && <div className="pristine-error text-help" role="alert">{errors.kode}</div>}
                        </div>
                    )}
                    <div className="mt-3">
                        <label className="self-stretch h-[18px] text-xs font-semibold font-['Poppins']">
                            User <span className="text-red-500">*</span>
                        </label>
                        <select // Ubah input menjadi select
                            name="user"
                            id="user"
                            className="form-select mt-1" // Ubah kelas menjadi form-select
                            value={data.user} // Ubah menjadi data.kategori
                            onChange={handleInputChange}
                        >
                            <option value="">Select User</option>
                            {hasilResponse.map(({ id, nama}) => (
                                <option key={id} value={id}>{nama}</option>
                            ))}
                        </select>
                        {errors.user && <div className="pristine-error text-help" role="alert">{errors.user}</div>}
                    </div>
                    <div className="mt-3">
                        <label className="self-stretch h-[18px] text-xs font-semibold font-['Poppins']">
                            Kategori <span className="text-red-500">*</span>
                        </label>
                        <select // Ubah input menjadi select
                            name="kategori"
                            id="kategori"
                            className="form-select mt-1" // Ubah kelas menjadi form-select
                            value={data.kategori} // Ubah menjadi data.kategori
                            onChange={handleInputChange}
                        >
                            <option value="">Select Category</option>
                            {kategoriBarang.map(({ id, nama}) => (
                                <option key={id} value={id}>{nama}</option>
                            ))}
                        </select>
                        {errors.kategori && <div className="pristine-error text-help" role="alert">{errors.kategori}</div>}
                    </div>
                    <div className="mt-3">
                        <label className="self-stretch h-[18px] text-xs font-semibold font-['Poppins']">
                            Satuan <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="satuan"
                            id="satuan"
                            className="form-input mt-1"
                            placeholder="Enter Title"
                            aria-describedby="input-helper-text"
                            value={data.satuan}
                            onChange={handleInputChange}
                        />
                        <div className="text-gray-400" role="alert">Example: kg, m, lt.</div>
                        {errors.satuan && <div className="pristine-error text-help" role="alert">{errors.satuan}</div>}
                    </div>
                    <div className="mt-3">
                        <label className="self-stretch h-[18px] text-xs font-semibold font-['Poppins']">
                            Nama <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="nama"
                            id="nama"
                            className="form-input mt-1"
                            placeholder="Enter Title"
                            aria-describedby="input-helper-text"
                            value={data.nama}
                            onChange={handleInputChange}
                        />
                        {errors.nama && <div className="pristine-error text-help" role="alert">{errors.nama}</div>}
                    </div>
                    <div className="mt-3">
                        <label className="self-stretch h-[18px] text-xs font-semibold font-['Poppins']">
                            Jumlah <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="jumlah"
                            id="jumlah"
                            className="form-input datepicker mt-1"
                            placeholder="Enter Date"
                            aria-describedby="input-helper-text"
                            value={data.jumlah}
                            onChange={handleInputChange}
                        />
                        {errors.jumlah && <div className="pristine-error text-help" role="alert">{errors.jumlah}</div>}
                    </div>

                    <div className="flex justify-start gap-3 mt-5">
                        <a href="#" onClick={e => history.back()} className="inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none">
                            Back
                        </a>
                        <button type="submit" className="inline-flex items-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
};

export default BarangForm;
