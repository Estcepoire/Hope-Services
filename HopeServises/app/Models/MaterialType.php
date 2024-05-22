<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MaterialType extends Model
{
    use HasFactory;

    /*
     * CREATE TABLE material_types (
            id SERIAL PRIMARY KEY,
            name VARCHAR(150) NOT NULL UNIQUE
        );
     */
    public $timestamps = false;
    public $table = 'material_types';

    protected $primaryKey = 'id';

    protected $fillable = [
        'id',
        'name'
    ];
}
