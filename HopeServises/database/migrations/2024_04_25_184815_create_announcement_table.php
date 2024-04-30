<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('announcements', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date')->nullable(false);
            $table->foreignId('client_id')->nullable(false)->constrained('clients');
            $table->foreignId('material_id')->nullable(false)->constrained('materials');
            $table->foreignId('package_id')->nullable(false)->constrained('packages');
            $table->double('quantity')->nullable(false);
            $table->double('longitude')->nullable(false);
            $table->double('latitude')->nullable(false);
            $table->integer('state')->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('announcements');
    }
};