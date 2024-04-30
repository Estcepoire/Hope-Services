<?php

namespace App\Http\Controllers;

use App\Models\Material;
use App\Models\MaterialGroup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialController extends Controller
{
    /**
     *  CREATE TABLE materials (
     * id SERIAL PRIMARY KEY,
     * name VARCHAR(150) NOT NULL UNIQUE,
     * material_group_id BIGINT REFERENCES material_groups(id)
     * );
     * /
     */
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materials = Material::whereHas('materialGroup')->with('materialGroup')->get();
        //dd($materials);die();
        return Inertia::render('Material/Index', [
            'materials' => $materials
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $materialGroups = MaterialGroup::all();
        return Inertia::render('Material/Create', [
            'materialGroups' => $materialGroups
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $name = $request->input('name');
        $materialGroupId = $request->input('material_group_id');
        $material = new Material();
        $material->name = $name;
        $material->material_group_id = $materialGroupId;
        $material->save();
        dd("Material created successfully");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $materialGroups = MaterialGroup::all();
        $materialGroups = collect($materialGroups);
        $material = Material::find($id);
        return Inertia::render('Material/Edit', [
            'material' => $material,
            'materialGroups' => $materialGroups
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $name = $request->input('name');
        $materialGroupId = $request->input('material_group_id');
        $material = Material::find($id);
        $material->name = $name;
        $material->material_group_id = $materialGroupId;
        $material->save();
        dd("Material updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $material = Material::find($id);
        $material->delete();
        dd("Material deleted successfully");
    }
}
