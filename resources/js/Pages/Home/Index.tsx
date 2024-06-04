import React, { useState, useEffect } from 'react';
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import AdminLayout from '@/Layouts/AdminLayout';
import Table from '@/Components/Table/Index';
import Thead from '@/Components/Table/Thead';
import Tbody from '@/Components/Table/Tbody';
import Row from '@/Components/Table/Row';
import Th from '@/Components/Table/Th';
import Td from '@/Components/Table/Td';
import Pagination from '@/Components/Pagination';
import { Inertia } from '@inertiajs/inertia';
import { HasilResponse } from '@/types';

interface PageProps {
    title: string;
    table: {
        data: HasilResponse[]
        from: string;
    };
}

const Home: React.FC = () => {
    // @ts-ignore
    const { props, url } = usePage<PageProps>();
    const { title, table }: PageProps = props;

    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        // Get the value of the 'q' query parameter from the URL string
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const searchQuery = urlParams.get('q') || '';
        // Set the searchValue state if 'q' query parameter exists
        if (searchQuery) {
            setSearchValue(searchQuery);
        }
    }, [url]);

    let searchTimeout: ReturnType<typeof setTimeout> | null = null;
    useEffect(() => {
        // Clear the timeout when component unmounts
        return () => {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
        };
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);
        // Clear any previous timeout
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
        // Set a new timeout for 500 milliseconds
        searchTimeout = setTimeout(() => {
            handleSearchSubmit(value);
        }, 3000); // 3 seconds
    };

    const handleSearchSubmit = (value: string) => {
        Inertia.visit('/', {
            data: {
                q: value
            },
        });
    };

    return (
        <AdminLayout>
            <Head title={`${title}`} />

            <div className="card">
                <div className="flex flex-wrap justify-between items-center gap-2 p-6">
                    <div>
                        
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <div>
                            <input
                                type="text"
                                name="q"
                                placeholder="Search"
                                className="form-input rounded-l-none"
                                value={searchValue}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                </div>

                {/* @ts-ignore */}
                <Table id="tableResult">
                    <Thead>
                        <Row>
                            {/* @ts-ignore */}
                            <Th className='ps-4 pe-3' width="50px">No</Th>
                            <Th>Nama</Th>
                            <Th>Jenis Kelamin</Th>
                            <Th>Jalan</Th>
                            <Th>Email</Th>
                            <Th>Profesi</Th>
                        </Row>
                    </Thead>
                    <Tbody>
                        {table.data.length > 0 ? (
                            table.data.map(({ id, nama, jenis_kelamin, nama_jalan, email, profesi }, index) => (
                                <Row key={id}>
                                    <Td className='ps-4 pe-3'>
                                        <b>{table?.from + index}</b>
                                    </Td>
                                    <Td>{nama}</Td>
                                    <Td>{jenis_kelamin?.jenis_kelamin}</Td>
                                    <Td>{nama_jalan}</Td>
                                    <Td>{email}</Td>
                                    <Td>{profesi?.nama_profesi}</Td>
                                </Row>
                            ))
                        ) : (
                                <Row>
                                    {/* @ts-ignore */}
                                    <Td colSpan={6} className="text-center">Data not found</Td>
                                </Row>
                            )}
                    </Tbody>
                </Table>
            </div>

            {/* @ts-ignore */}
            <Pagination data={table} />
        </AdminLayout>
    );
};

export default Home;
