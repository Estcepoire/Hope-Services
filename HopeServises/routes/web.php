<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\MaterialGroupController;
use App\Http\Controllers\MaterialTypeController;
use App\Http\Controllers\ProfileController;
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
require __DIR__ . '/auth.php';