<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MaterialType;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    public function list()
    {
        return Inertia::render('AnnouncementList/AnnouncementList');
    }

    public function form()
    {
        $materialTypes = MaterialType::all();
        return Inertia::render('Announcement/AnnouncementForm', [
            'materialTypes' => $materialTypes
        ]);
    }

    public function store(Request $request)
    {
        // Validate the request data
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'avatar' => 'required|file|image',
        // ]);

        echo $request->input('materialTypeId');
        // Handle the file upload
        // $avatarPath = $request->file('avatar')->store('avatars', 'public');

        // Here you can save the data to your database or perform other actions

        return redirect()->route('dashboard');
    }
}