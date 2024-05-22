<?php

use App\Http\Controllers\MaterialController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\MaterialGroupController;
use App\Http\Controllers\MaterialTypeController;
use App\Http\Controllers\ProductSheetController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AchatController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/post-announcement', [AnnouncementController::class, 'form'])->name('announcement.form');
Route::post('/post-announcement', [AnnouncementController::class, 'store'])->name('announcement.store');


// Announcement details
Route::get('/post-announcement-details',[ProductSheetController::class, 'details'])->name('announcement.details');


// Purchase
Route::get('/post-announcement-purchase',[AchatController::class, 'form'])->name('announcement.purchase');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('material-types', MaterialTypeController::class);
Route::resource('material-groups', MaterialGroupController::class);
Route::resource('materials', MaterialController::class);

Route::get('api/materials/group/{material_group_id}', [MaterialController::class, 'apiIndex'])->name('api.materials.group');
Route::get('api/material-groups/type/{material_type_id}', [MaterialGroupController::class, 'apiIndex'])->name('api.material-groups.type');
Route::get('api/material-types', [MaterialTypeController::class, 'apiIndex']);
require __DIR__ . '/auth.php';