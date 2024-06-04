<?php

namespace App;

use Illuminate\Support\Facades\Http;

class RandomUser
{
    protected $baseUrl = 'https://randomuser.me/api';

    public function fetchData($page = 1, $results = 25)
    {
        $response = Http::get($this->baseUrl, [
            'page' => $page,
            'results' => $results
        ]);
        
        if ($response->successful()) {
            return $response->json();
        }

        return null;
    }
}
