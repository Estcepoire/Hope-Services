<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductSheetController extends Controller
{
    public function details()
    {
        return Inertia::render('ProductSheet/ProductSheet');
    }
}
