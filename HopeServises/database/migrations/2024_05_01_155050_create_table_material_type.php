<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        /**
         * CREATE TABLE material_types (
         * id SERIAL PRIMARY KEY,
         * name VARCHAR(150) NOT NULL UNIQUE
         * );
         */
        Schema::create('material_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150)->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_material_type');
    }
};
