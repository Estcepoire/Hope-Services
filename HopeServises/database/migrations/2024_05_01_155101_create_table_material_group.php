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
         * CREATE TABLE material_groups (
         * id SERIAL PRIMARY KEY,
         * name VARCHAR(150) NOT NULL UNIQUE,
         * material_type_id BIGINT REFERENCES material_types(id) NOT NULL
         * );
         */
        Schema::create('material_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name', 150)->unique();
            $table->bigInteger('material_type_id')->unsigned();
            $table->foreign('material_type_id')->references('id')->on('material_types');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_material_group');
    }
};
