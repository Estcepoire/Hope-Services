<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;

    /*
     * CREATE TABLE materials (
            id SERIAL PRIMARY KEY,
            name VARCHAR(150) NOT NULL UNIQUE,
            material_group_id BIGINT REFERENCES material_groups(id)
        );
     */
    public $timestamps = false;
    public $table = 'materials';

    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
        'name',
        'material_group_id'
    ];
}
