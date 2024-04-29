<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaterialGroup extends Model
{
    use HasFactory;

    /*
     * CREATE TABLE material_groups (
            id SERIAL PRIMARY KEY,
            name VARCHAR(150) NOT NULL UNIQUE,
            material_type_id BIGINT REFERENCES material_types(id) NOT NULL
        );
     */

    public $timestamps = false;
    public $table = 'material_groups';

    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'name',
        'material_type_id'
    ];
}
