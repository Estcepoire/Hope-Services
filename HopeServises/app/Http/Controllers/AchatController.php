<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AchatController extends Controller
{
    public function form()
    {
        return Inertia::render('Achat/Achat');
    }
}
