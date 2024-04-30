<?php

namespace App\Http\Controllers;

use App\Models\MaterialGroup;
use App\Models\MaterialType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialGroupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all data includes material types with name
        $materialGroups = MaterialGroup::whereHas('materialType')->with('materialType')->get();
        return Inertia::render('MaterialGroup/Index', [
            'materialGroups' => $materialGroups
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $materialTypes = MaterialType::all();
        return Inertia::render('MaterialGroup/Create', [
            'materialTypes' => $materialTypes
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //store data
        $name = $request->input('name');
        $materialTypeId = $request->input('material_type_id');
        $materialGroup = new MaterialGroup();
        $materialGroup->name = $name;
        $materialGroup->material_type_id = $materialTypeId;
        $materialGroup->save();
        //return redirect()->route('material-groups.index');
        dd("Material group created successfully");
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
        $materialTypes = MaterialType::all();
        $materialTypes = collect($materialTypes);
        $materialGroup = MaterialGroup::find($id);
        return Inertia::render('MaterialGroup/Edit', [
            'materialGroup' => $materialGroup,
            'materialTypes' => $materialTypes
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //update data
        $name = $request->input('name');
        $materialTypeId = $request->input('material_type_id');
        $materialGroup = MaterialGroup::find($id);
        dd($materialGroup);die();
        $materialGroup->name = $name;
        $materialGroup->material_type_id = $materialTypeId;
        $materialGroup->save();
        //return redirect()->route('material-groups.index');
        dd("Material group updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //delete data
        $materialGroup = MaterialGroup::find($id);
        $materialGroup->delete();
        //return redirect()->route('material-groups.index');
        dd("Material group deleted successfully");
    }
}
