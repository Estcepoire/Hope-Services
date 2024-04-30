<?php

namespace App\Http\Controllers;

use App\Models\MaterialType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialTypeController extends Controller
{
    /**
     * GET /material-types pour la méthode index
     * GET /material-types/create pour la méthode create
     * POST /material-types pour la méthode store
     * GET /material-types/{id} pour la méthode show
     * GET /material-types/{id}/edit pour la méthode edit
     * PUT/PATCH /material-types/{id} pour la méthode update
     * DELETE /material-types/{id} pour la méthode destroy
     */

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $materialTypes = MaterialType::all();
        return Inertia::render('MaterialType/Index', [
            'materialTypes' => $materialTypes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('MaterialType/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //store data
        $name = $request->input('name');
        $materialType = new MaterialType();
        $materialType->name = $name;
        $materialType->save();
        //return redirect()->route('material-types.index');
        dd("Material type created successfully");
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
        $name = MaterialType::find($id)->name;
        return Inertia::render('MaterialType/Edit', [
            'id' => $id,
            'name' => $name
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //update data
        $name = $request->input('name');
        $materialType = MaterialType::find($id);
        $materialType->name = $name;
        $materialType->save();
        //return redirect()->route('material-types.index');
        dd("Material type updated successfully");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //delete data
        $materialType = MaterialType::find($id);
        $materialType->delete();
        //return redirect()->route('material-types.index');
        dd("Material type deleted successfully");
    }

    public function materialTypes()
    {
        $materialTypes = MaterialType::all();
        return response()->json($materialTypes);
    }
}
